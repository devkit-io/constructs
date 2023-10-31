import { Stack } from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import { Function as LambdaFunctionResource, InlineCode, Runtime } from 'aws-cdk-lib/aws-lambda';
import { Bucket, EventType } from 'aws-cdk-lib/aws-s3';
import { S3EventTriggeredLambda, S3EventLambdaProps } from '../../src';

describe('S3EventLambda', () => {
  let stack: Stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test('construct uses the provided existing Lambda function', () => {
    const existingFunction = new LambdaFunctionResource(stack, 'ExistingFunction', {
      code: new InlineCode('code'),
      handler: 'index.handler',
      runtime: Runtime.NODEJS_18_X,
    });

    const props: S3EventLambdaProps = {
      bucket: new Bucket(stack, 'TestBucket'),
      lambdaFunction: existingFunction,
    };
    new S3EventTriggeredLambda(stack, 'TestConstruct', props);

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::Lambda::Function', {
      Handler: 'index.handler',
    });
  });

  test('construct sets up default OBJECT_CREATED event notifications when no event types are specified', () => {
    const existingFunction = new LambdaFunctionResource(stack, 'ExistingFunction', {
      code: new InlineCode('code'),
      handler: 'index.handler',
      runtime: Runtime.NODEJS_18_X,
    });

    const props: S3EventLambdaProps = {
      bucket: new Bucket(stack, 'TestBucket'),
      lambdaFunction: existingFunction,
    };
    new S3EventTriggeredLambda(stack, 'TestConstruct', props);

    const template = Template.fromStack(stack);
    template.hasResourceProperties('Custom::S3BucketNotifications', {
      NotificationConfiguration: Match.objectLike({
        LambdaFunctionConfigurations: [
          {
            Events: ['s3:ObjectCreated:*'],
          },
        ],
      }),
    });
  });

  test('construct sets up the specified event notifications', () => {
    const existingFunction = new LambdaFunctionResource(stack, 'ExistingFunction', {
      code: new InlineCode('code'),
      handler: 'index.handler',
      runtime: Runtime.NODEJS_18_X,
    });

    const props: S3EventLambdaProps = {
      bucket: new Bucket(stack, 'TestBucket'),
      lambdaFunction: existingFunction,
      eventTypeNotifications: [EventType.OBJECT_REMOVED],
    };
    new S3EventTriggeredLambda(stack, 'TestConstruct', props);

    const template = Template.fromStack(stack);
    template.hasResourceProperties('Custom::S3BucketNotifications', {
      NotificationConfiguration: Match.objectLike({
        LambdaFunctionConfigurations: [
          {
            Events: ['s3:ObjectRemoved:*'],
          },
        ],
      }),
    });
  });
});
