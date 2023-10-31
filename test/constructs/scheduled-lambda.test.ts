import { Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Function as LambdaFunctionResource, InlineCode, Runtime } from 'aws-cdk-lib/aws-lambda';
import { ScheduledLambda, ScheduledLambdaProps } from '../../src';

jest.mock('aws-cdk-lib/aws-lambda', () => {
  return {
    ...jest.requireActual('aws-cdk-lib/aws-lambda'),
    AssetCode: {
      fromAsset: jest.fn(),
    },
  };
});


// Mock only the 'fromAsset' method
jest.spyOn(lambda.AssetCode, 'fromAsset').mockImplementation((filepath: string) => {
  return {
    isInline: false,
    bind: jest.fn().mockReturnValue({
      s3Location: {
        bucketName: 'mockBucket',
        objectKey: 'mockKey',
      },
    }),
    bindToResource: jest.fn(),
    path: filepath,
    options: {},
  } as any;
});
describe('ScheduledLambda', () => {
  let stack: Stack;

  beforeEach(() => {
    // Create a new stack for each test to avoid state leakage
    stack = new Stack();
  });

  it('uses the provided existing Lambda function', () => {
    const existingFunction = new LambdaFunctionResource(stack, 'ExistingFunction', {
      code: new InlineCode('code'),
      handler: 'index.handler',
      runtime: Runtime.NODEJS_18_X,
    });

    const props: ScheduledLambdaProps = {
      scheduleExpression: 'cron(0/5 * * * ? *)',
      lambdaFunction: existingFunction,
    };

    // Instantiate the construct
    new ScheduledLambda(stack, 'MyScheduledLambda', props);

    // Create assertions Template
    const template = Template.fromStack(stack);

    // Check if the existing Lambda function is used (no new Lambda function is created)
    template.resourceCountIs('AWS::Lambda::Function', 1);
    template.hasResourceProperties('AWS::Lambda::Function', {
      Handler: 'index.handler',
    });

    // Check if a Rule is created
    template.resourceCountIs('AWS::Events::Rule', 1);
  });

  it('throws an error when neither lambdaFunction nor codePath and handler are provided', () => {
    const props: ScheduledLambdaProps = {
      scheduleExpression: 'cron(0/5 * * * ? *)',
      runtime: Runtime.NODEJS_18_X,
    };

    expect(() => {
      new ScheduledLambda(stack, 'MyScheduledLambda', props);
    }).toThrow('You must provide either lambdaFunction or both codePath and handler.');
  });
});
