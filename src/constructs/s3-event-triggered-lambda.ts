import { RemovalPolicy } from 'aws-cdk-lib';
import { Function as LambdaFunctionResource, Runtime } from 'aws-cdk-lib/aws-lambda';
import { Bucket, EventType, IBucket } from 'aws-cdk-lib/aws-s3';
import { LambdaDestination } from 'aws-cdk-lib/aws-s3-notifications';
import { Construct } from 'constructs';
import { MonitoredNodeLambda } from './monitored-node-lambda';

export interface S3EventLambdaProps {
  readonly bucket: IBucket; // Reference to the S3 bucket.
  readonly codePath?: string; // Path to the Lambda function's source code.
  readonly handler?: string; // Handler for the Lambda function.
  readonly memorySize?: number; // Memory size for the Lambda function.
  readonly runtime?: Runtime; // Runtime environment for the Lambda function.
  readonly environment?: { [key: string]: string }; // Environment variables for the Lambda function.
  readonly lambdaFunction?: LambdaFunctionResource; // An existing Lambda function to use.
  readonly eventTypeNotifications?: EventType[]; // S3 event types to trigger the Lambda function.
}

/**
 * A construct to create a Lambda function triggered by S3 bucket creation events.
 * This can either create a new MonitoredNodeLambda or use an existing Lambda function.
 */
export class S3EventTriggeredLambda extends Construct {
  constructor(scope: Construct, id: string, props: S3EventLambdaProps) {
    super(scope, id);

    // Ensure appropriate properties are provided.
    if (!props.lambdaFunction && (!props.codePath || !props.handler)) {
      throw new Error('You must provide either lambdaFunction or both codePath and handler.');
    }

    const bucket = props.bucket ?? new Bucket(this, `${id}Bucket`, {
      removalPolicy: RemovalPolicy.DESTROY,
    });

    // Create or use the provided Lambda function.
    const lambda = props.lambdaFunction ?? new MonitoredNodeLambda(this, `${id}MonitoredLambda`, {
      codeDir: props.codePath!,
      handler: props.handler!,
      runtime: props.runtime,
      runtimeEnvironment: props.environment,
      description: 'Lambda function triggered by S3 events',
      memorySize: props.memorySize ?? 512,
    }).lambda;

    bucket.grantRead(lambda);

    let eventTypeNotifications = props.eventTypeNotifications ?? [EventType.OBJECT_CREATED];

    eventTypeNotifications.forEach(eventType => {
      bucket.addEventNotification(eventType, new LambdaDestination(lambda));
    });
  }
}
