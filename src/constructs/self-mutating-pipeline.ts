import { Duration, Stage } from 'aws-cdk-lib';
import { BuildEnvironmentVariableType, ComputeType, IBuildImage } from 'aws-cdk-lib/aws-codebuild';
import { IVpc } from 'aws-cdk-lib/aws-ec2';
import { SnsTopic } from 'aws-cdk-lib/aws-events-targets';
import { PolicyStatement, Role } from 'aws-cdk-lib/aws-iam';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { ITopic } from 'aws-cdk-lib/aws-sns';
import { CodeBuildStep, CodePipeline, CodePipelineSource } from 'aws-cdk-lib/pipelines';
import { Construct } from 'constructs';

export interface EnvironmentVariable {
  readonly name: string;
  readonly type: BuildEnvironmentVariableType;
  readonly value: string;
}

export interface SelfMutatingPipelineProps {
  readonly sourceConnectionArn: string;
  readonly repositoryName: string;
  readonly branchName?: string;
  readonly buildCommands: string[];
  readonly codeBuildComputeType?: ComputeType;
  readonly stages: Stage[];
  readonly environmentVariables?: EnvironmentVariable[];
  readonly customRole?: Role;
  readonly artifactBucket?: Bucket;
  readonly notificationsTopic?: ITopic;
  readonly buildImage?: IBuildImage;
  readonly buildTimeout?: Duration;
  readonly additionalPolicies?: PolicyStatement[];
  readonly cacheBucket?: Bucket;
  readonly synthOutputDirectory?: string;
  readonly vpc?: IVpc;
}

export class SelfMutatingPipeline extends Construct {
  constructor(scope: Construct, id: string, props: SelfMutatingPipelineProps) {
    super(scope, id);

    const source = CodePipelineSource.connection(props.repositoryName, props.branchName || 'main', {
      connectionArn: props.sourceConnectionArn,
    });

    const codeBuildDefaults = {
      buildEnvironment: {
        privileged: true,
        computeType: props.codeBuildComputeType || ComputeType.SMALL,
        environmentVariables: props.environmentVariables ? transformEnvVars(props.environmentVariables) : undefined,
        image: props.buildImage,
      },
      role: props.customRole,
      rolePolicy: props.additionalPolicies?.length
        ? props.additionalPolicies
        : [new PolicyStatement({
          resources: ['*'],
          actions: ['secretsmanager:GetSecretValue'],
        })],
      artifactBucket: props.artifactBucket,
      cacheBucket: props.cacheBucket,
      vpc: props.vpc,
      buildTimeout: props.buildTimeout,
    };

    const synth = new CodeBuildStep(`${id}-Synth`, {
      input: source,
      commands: props.buildCommands,
      primaryOutputDirectory: props.synthOutputDirectory ?? 'deployment/cdk.out',
      ...codeBuildDefaults, // spread in the codeBuild properties
    });

    const pipeline = new CodePipeline(this, `${id}-Pipeline`, {
      crossAccountKeys: false,
      synth: synth,
      selfMutation: true,
      codeBuildDefaults: codeBuildDefaults,
    });

    // Add each stage to the pipeline
    props.stages.forEach((stage) => {
      pipeline.addStage(stage);
    });

    pipeline.buildPipeline();

    if (props.notificationsTopic) {
      const snsTarget = new SnsTopic(props.notificationsTopic);
      pipeline.pipeline.onStateChange(`${id}-OnStateChange`, {
        target: snsTarget,
      });
    }
  }

}

// Helper function to transform the environment variables to the format expected by CDK
function transformEnvVars(envVars: EnvironmentVariable[]): {
  [key: string]: { type: BuildEnvironmentVariableType; value: string };
} {
  const transformed: { [key: string]: { type: BuildEnvironmentVariableType; value: string } } = {};

  for (const envVar of envVars) {
    transformed[envVar.name] = {
      type: envVar.type,
      value: envVar.value,
    };
  }

  return transformed;
}
