import * as path from 'path';
import { Duration, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { MonitoredNodeLambda } from '../../src'; // Update the path accordingly
// Mock only the 'fromAsset' method

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


describe('MonitoredNodeLambda', () => {
  const defaultProps = {
    codeDir: path.join(__dirname, '..', '/mocks/test-lambda-code'), // Update with a valid directory for testing
    description: 'Test Lambda',
    handler: 'index.handler',
  };

  test('creates a Lambda function, Alarm, and Deployment Group', () => {
    const stack = new Stack();
    new MonitoredNodeLambda(stack, 'TestMonitoredLambda', defaultProps);

    const assert = Template.fromStack(stack);
    assert.resourceCountIs('AWS::Lambda::Function', 1);
    assert.resourceCountIs('AWS::CloudWatch::Alarm', 1);
    assert.resourceCountIs('AWS::CodeDeploy::DeploymentGroup', 1);
  });

  test('sets correct runtime for Lambda', () => {
    const stack = new Stack();
    new MonitoredNodeLambda(stack, 'TestMonitoredLambda', defaultProps);

    const assert = Template.fromStack(stack);
    assert.hasResourceProperties('AWS::Lambda::Function', {
      Runtime: 'nodejs18.x',
    });
  });

  test('configures Lambda with provided memory and timeout', () => {
    const modifiedProps = {
      ...defaultProps,
      memorySize: 1024,
      runtimeDuration: Duration.seconds(300), // This value is in seconds
    };

    const stack = new Stack();
    new MonitoredNodeLambda(stack, 'TestMonitoredLambda', modifiedProps);

    const assert = Template.fromStack(stack);
    assert.hasResourceProperties('AWS::Lambda::Function', {
      MemorySize: 1024,
      Timeout: Duration.seconds(300).toSeconds(),
    });
  });

});

