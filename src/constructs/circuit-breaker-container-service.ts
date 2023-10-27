import { ICertificate } from 'aws-cdk-lib/aws-certificatemanager';
import { Alarm } from 'aws-cdk-lib/aws-cloudwatch';
import { SnsAction } from 'aws-cdk-lib/aws-cloudwatch-actions';
import { DockerImageAsset } from 'aws-cdk-lib/aws-ecr-assets';
import {
  AwsLogDriver,
  Compatibility,
  ContainerImage,
  Ec2Service,
  ICluster,
  NetworkMode,
  Scope,
  Secret as ecsSecret,
  TaskDefinition,
} from 'aws-cdk-lib/aws-ecs';
import { ApplicationTargetGroup } from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import { IRole } from 'aws-cdk-lib/aws-iam';
import { Topic } from 'aws-cdk-lib/aws-sns';
import { EmailSubscription } from 'aws-cdk-lib/aws-sns-subscriptions';
import { Construct } from 'constructs';

/**
 * `PagingOptions` defines the configuration for setting up paging alerts.
 * If `pagingEnabled` is true, alarms will send notifications to the provided `pageEmailAddresses`.
 */
export interface PagingOptions {
  readonly pagingEnabled: boolean;
  readonly pageEmailAddresses: string[];
}

/**
 * `MonitoringOptions` provides configurations for setting up monitoring for the service.
 * It supports setting up paging alerts and customizing error patterns for metric filters.
 */
export interface MonitoringOptions {
  readonly paging?: PagingOptions;
  readonly errorPattern?: string;
  readonly threshold?: number;
  readonly evaluationPeriods?: number;
}

export interface EbsVolumeConfiguration {
  readonly volumeName: string;
  readonly volumeSize: number;
  readonly volumeType: string;
  readonly mountPoint: string;
  readonly deleteOnTermination: boolean;
  readonly readOnly: boolean;
}


export interface ServiceConfiguration {
  readonly circuitBreakerEnabled?: boolean;
  readonly desiredCount: number;
  readonly healthCheckPath: string;
  readonly memoryLimit: number;
  readonly minHealthyPercent?: number;
  readonly maxHealthyPercent?: number;
  readonly servicePort: number;
  readonly serviceImage: DockerImageAsset;
  readonly serviceContainerEnvVars?: {
    [key: string]: string;
  };
  readonly serviceContainerSecrets?: {
    [key: string]: ecsSecret;
  };
  readonly ebsVolumeConfiguration?: EbsVolumeConfiguration;
  readonly logRetentionDays?: number;
}

export interface CircuitBreakerContainerServiceProps {
  readonly certificate?: ICertificate;
  readonly cluster: ICluster;
  readonly monitoringOptions: MonitoringOptions;
  readonly serviceName: string;
  readonly serviceConfiguration: ServiceConfiguration;
  readonly targetGroupArns: string[];
}


/**
 * The `CircuitBreakerContainerService` class creates an ECS Service on a provided ECS cluster
 * and attaches to the provided target groups. Features include:
 * - Logging with customizable retention periods
 * - Circuit breaker rollback configurations
 * - Optional EBS volume configurations and mounts
 * - Customizable monitoring and alerting based on log patterns
 */
export class CircuitBreakerContainerService extends Construct {
  private props: CircuitBreakerContainerServiceProps;
  readonly service: Ec2Service;
  readonly serviceRole: IRole;

  constructor(scope: Construct, id: string, props: CircuitBreakerContainerServiceProps) {
    super(scope, id);
    this.props = props;

    this.service = this.setupService(
      id,
      props.cluster,
      this.props.serviceConfiguration.serviceImage,
    );

    this.serviceRole = this.service.taskDefinition.taskRole;

    let count = 0;

    for (let targetGroupArn of props.targetGroupArns) {
      const targetGroupHttp = ApplicationTargetGroup.fromTargetGroupAttributes(this, `${id}TargetGroupHttp${count}`, {
        targetGroupArn: targetGroupArn,
      });

      count++;

      this.service.attachToApplicationTargetGroup(targetGroupHttp);
    }
  }

  /**
   * Sets up the ECS service with the provided configurations.
   * Configures logging, EBS volumes (if specified), and attaches the service to target groups.
   *
   * @param id The unique identifier for resources
   * @param cluster The ECS cluster where the service will be deployed
   * @param serviceImage The Docker image asset for the service
   * @returns The created EC2Service instance
   */
  private setupService(id: string, cluster: ICluster, serviceImage: DockerImageAsset): Ec2Service {
    let taskDef = new TaskDefinition(this, `${id}serviceTask`, {
      compatibility: Compatibility.EC2,
      networkMode: NetworkMode.BRIDGE,
    });

    const logDriver = new AwsLogDriver({
      streamPrefix: this.props.serviceName,
      logRetention: this.props.serviceConfiguration.logRetentionDays ?? 90,
    });

    const serviceContainer = taskDef.addContainer(`${id}ServiceContainer`, {
      essential: true,
      image: ContainerImage.fromDockerImageAsset(serviceImage),
      logging: logDriver,
      portMappings: [{
        containerPort: this.props.serviceConfiguration.servicePort,
      }],
      environment: this.props.serviceConfiguration.serviceContainerEnvVars,
      secrets: this.props.serviceConfiguration.serviceContainerSecrets,
      memoryLimitMiB: this.props.serviceConfiguration.memoryLimit,
    });

    if (this.props.serviceConfiguration.ebsVolumeConfiguration) {
      const volumeConfiguration = this.props.serviceConfiguration.ebsVolumeConfiguration;
      taskDef.addVolume({
        name: volumeConfiguration.volumeName,
        dockerVolumeConfiguration: {
          scope: Scope.SHARED,
          autoprovision: true,
          driver: 'rexray/ebs',
          driverOpts: {
            type: volumeConfiguration.volumeType,
            size: volumeConfiguration.volumeSize.toString(),
          },
        },
      });

      serviceContainer.addMountPoints({
        containerPath: volumeConfiguration.mountPoint,
        sourceVolume: volumeConfiguration.volumeName,
        readOnly: volumeConfiguration.readOnly,
      });
    }

    this.setupMonitoring(id, logDriver);

    return new Ec2Service(this, `${id}Service`, {
      cluster: cluster,
      taskDefinition: taskDef,
      minHealthyPercent: this.props.serviceConfiguration.minHealthyPercent ?? 50,
      maxHealthyPercent: this.props.serviceConfiguration.maxHealthyPercent ?? 200,
      desiredCount: this.props.serviceConfiguration.desiredCount,
      circuitBreaker: { rollback: this.props.serviceConfiguration.circuitBreakerEnabled ?? true },
    });
  }

  /**
   * Configures monitoring for the service.
   * Sets up a metric filter based on provided error patterns and creates alarms.
   * If paging is enabled, it will send notifications to the specified email addresses.
   *
   * @param id The unique identifier for resources
   * @param logDriver The log driver associated with the service
   */
  private setupMonitoring(id: string, logDriver: AwsLogDriver) {
    const metricFilter = logDriver.logGroup?.addMetricFilter('errorCount', {
      filterPattern: {
        logPatternString: this.props.monitoringOptions?.errorPattern ?? 'ERROR',
      },
      metricNamespace: this.props.serviceName,
      metricName: 'ErrorCount',
      defaultValue: 0,
      metricValue: '1',
    });

    if (metricFilter) {
      const { paging, threshold = 1, evaluationPeriods = 1 } = this.props.monitoringOptions || {};

      const failureAlarm = new Alarm(this, `${id}ErrorAlarm`, {
        metric: metricFilter.metric(),
        threshold: threshold,
        evaluationPeriods: evaluationPeriods,
      });

      if (paging?.pagingEnabled && paging?.pageEmailAddresses) {
        const topic = new Topic(this, `${id}pageTopic`);
        for (let email of paging.pageEmailAddresses) {
          topic.addSubscription(new EmailSubscription(email));
          failureAlarm.addAlarmAction(new SnsAction(topic));
        }
      }
    }
  }
}