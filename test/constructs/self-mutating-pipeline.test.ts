import { Stack, Stage } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { BuildEnvironmentVariableType } from 'aws-cdk-lib/aws-codebuild';
import { Topic } from 'aws-cdk-lib/aws-sns';
import { EnvironmentVariable, SelfMutatingPipeline } from '../../src';

describe('SelfMutatingPipeline Construct', () => {
  let stack: Stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test('basic pipeline creation', () => {
    new SelfMutatingPipeline(stack, 'TestPipeline', {
      sourceConnectionArn: 'testArn',
      repositoryName: 'testOwner/testRepo',
      buildCommands: ['testCommand'],
      stages: [],
    });

    const assert = Template.fromStack(stack);
    assert.resourceCountIs('AWS::CodePipeline::Pipeline', 1);
  });

  test('environment variables are set correctly', () => {
    const envVars: EnvironmentVariable[] = [
      {
        name: 'TEST_ENV',
        type: BuildEnvironmentVariableType.PLAINTEXT,
        value: 'testValue',
      },
    ];

    new SelfMutatingPipeline(stack, 'TestPipelineWithEnv', {
      sourceConnectionArn: 'testArn',
      repositoryName: 'testOwner/testRepo',
      environmentVariables: envVars,
      buildCommands: ['testCommand'],
      stages: [],
    });

    const assert = Template.fromStack(stack);
    assert.hasResourceProperties('AWS::CodeBuild::Project', {
      Environment: {
        EnvironmentVariables: [
          {
            Name: 'TEST_ENV',
            Type: 'PLAINTEXT',
            Value: 'testValue',
          },
        ],
      },
    });
  });

  test('notifications topic is set correctly', () => {
    const mockTopic = new Topic(stack, 'TestTopic', {
      topicName: 'testTopic',
    });

    new SelfMutatingPipeline(stack, 'TestPipelineWithNotifications', {
      sourceConnectionArn: 'testArn',
      repositoryName: 'testOwner/testRepo',
      buildCommands: ['testCommand'],
      stages: [],
      notificationsTopic: mockTopic,
    });

    const assert = Template.fromStack(stack);
    assert.resourceCountIs('AWS::Events::Rule', 1);
  });

  test('stages are added correctly', () => {

    class FakeStage extends Stage {
      constructor(scope: Stack, id: string) {
        super(scope, id);
        new Stack(this, 'FakeStack');
      }
    }

    new SelfMutatingPipeline(stack, 'TestPipelineWithStages', {
      sourceConnectionArn: 'testArn',
      repositoryName: 'testOwner/testRepo',
      buildCommands: ['testCommand'],
      stages: [new FakeStage(stack, 'TestStage')],
    });

    const assert = Template.fromStack(stack);
    assert.resourceCountIs('AWS::CodePipeline::Pipeline', 1);
  });
});