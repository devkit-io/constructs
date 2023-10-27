import { Duration } from 'aws-cdk-lib';
import { Alarm, Metric } from 'aws-cdk-lib/aws-cloudwatch';
import { LambdaDeploymentConfig, LambdaDeploymentGroup } from 'aws-cdk-lib/aws-codedeploy';
import { Alias, AssetCode, Function, Runtime } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

export interface MonitoredNodeLambdaProps {
  readonly alarmThreshold?: number;
  readonly alarmEvaluationPeriod?: number;
  readonly codeDir: string;
  readonly bundleCommand?: string[];
  readonly bundleEnvironment?: Record<string, string>;
  readonly description: string;
  readonly handler: string;
  readonly memorySize?: number;
  readonly runtimeDuration?: Duration;
  readonly runtimeEnvironment?: Record<string, string>;
  readonly deploymentConfig?: LambdaDeploymentConfig;
}

/**
 * A construct to create a monitored Node.js Lambda function with deployment capabilities.
 */
export class MonitoredNodeLambda extends Construct {
  readonly alarm: Alarm;
  readonly lambda: Function;
  readonly deploymentGroup: LambdaDeploymentGroup;

  constructor(scope: Construct, id: string, props: MonitoredNodeLambdaProps) {
    super(scope, id);

    this.lambda = this.createLambdaFunction(props);
    this.alarm = this.setupMonitoring(props);
    this.deploymentGroup = this.setupDeployment(props);
  }

  private createLambdaFunction(props: MonitoredNodeLambdaProps): Function {
    const codeAsset = AssetCode.fromAsset(props.codeDir, {
      bundling: {
        image: Runtime.NODEJS_18_X.bundlingImage,
        command: props.bundleCommand ?? [
          'bash', '-c', `
        export npm_config_cache=/tmp/.npm &&
        npm install &&
        npm run build &&
        cp -au node_modules /asset-output &&
        cp -au build/* /asset-output
        `,
        ],
        environment: props.bundleEnvironment,
      },
    });

    return new Function(this, 'MonitoredNodeFunction', {
      runtime: Runtime.NODEJS_18_X,
      timeout: props.runtimeDuration ?? Duration.minutes(1),
      description: props.description,
      handler: props.handler,
      code: codeAsset,
      memorySize: props.memorySize ?? 2048,
      environment: props.runtimeEnvironment ?? {},
    });
  }

  private setupMonitoring(props: MonitoredNodeLambdaProps): Alarm {
    const funcErrorMetric = new Metric({
      metricName: 'Errors',
      namespace: 'AWS/Lambda',
      dimensionsMap: {
        FunctionName: this.lambda.functionName,
      },
      statistic: 'Sum',
      period: Duration.minutes(1),
    });

    return new Alarm(this, 'FunctionErrorAlarm', {
      metric: funcErrorMetric,
      threshold: props.alarmThreshold ?? 1,
      evaluationPeriods: props.alarmEvaluationPeriod ?? 1,
    });
  }

  private setupDeployment(props: MonitoredNodeLambdaProps): LambdaDeploymentGroup {
    const alias = new Alias(this, 'FunctionAlias', {
      aliasName: 'CurrentVersion',
      version: this.lambda.currentVersion,
    });

    return new LambdaDeploymentGroup(this, 'FunctionDeploymentGroup', {
      alias,
      deploymentConfig: props.deploymentConfig ?? LambdaDeploymentConfig.LINEAR_10PERCENT_EVERY_1MINUTE,
      alarms: [this.alarm],
    });
  }
}
