import { Stack } from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import { DockerImageAsset } from 'aws-cdk-lib/aws-ecr-assets';
import { ICluster } from 'aws-cdk-lib/aws-ecs';
import { CircuitBreakerContainerService, CircuitBreakerContainerServiceProps } from '../../src';


describe('CircuitBreakerContainerService', () => {
  let stack: Stack;
  let props: CircuitBreakerContainerServiceProps;

  const mockDockerImageAsset = {
    imageUri: 'testImageUri',
    repository: {
      grantPull: jest.fn(),
    },
  } as unknown as DockerImageAsset;

  const mockCluster = {
    clusterName: 'testCluster',
    connections: {
      securityGroups: [],
    },
    hasEc2Capacity: jest.fn().mockReturnValue(true),
    bind: jest.fn().mockReturnValue({

    }),
  } as unknown as ICluster;

  beforeEach(() => {
    stack = new Stack();

    props = {
      cluster: mockCluster,
      serviceName: 'TestService',
      monitoringOptions: {},
      serviceConfiguration: {
        desiredCount: 1,
        healthCheckPath: '/health',
        memoryLimit: 512,
        servicePort: 8080,
        serviceImage: mockDockerImageAsset,
      },
      targetGroupArns: ['arn:aws:elasticloadbalancing:region:account-id:targetgroup/target-group-name/id'],
    };
  });

  it('creates an ECS service with the provided configurations', () => {
    new CircuitBreakerContainerService(stack, 'TestContainerService', props);

    const assert = Template.fromStack(stack);
    // Check if an ECS Service is created
    assert.hasResourceProperties('AWS::ECS::Service', {
      DesiredCount: Match.exact(props.serviceConfiguration.desiredCount),
    });
  });

  it('attaches the service to provided target groups', () => {
    new CircuitBreakerContainerService(stack, 'TestContainerService', props);

    const assert = Template.fromStack(stack);

    // Check if the service is attached to the target groups
    assert.hasResourceProperties('AWS::ECS::Service', {
      LoadBalancers: Match.arrayWith([
        Match.objectLike({
          TargetGroupArn: props.targetGroupArns[0],
        }),
      ]),
    });
  });

  it('configures logging with the provided stream prefix and retention', () => {
    new CircuitBreakerContainerService(stack, 'TestContainerService', props);

    const assert = Template.fromStack(stack);
    assert.hasResourceProperties('AWS::Logs::LogGroup', {
      RetentionInDays: props.serviceConfiguration.logRetentionDays ?? 90,
    });
  });

  it('configures EBS volumes when provided', () => {
    props = {
      ...props,
      serviceConfiguration: {
        ...props.serviceConfiguration,
        ebsVolumeConfiguration: {
          volumeName: 'testVolume',
          volumeSize: 10,
          volumeType: 'gp2',
          mountPoint: '/data',
          deleteOnTermination: true,
          readOnly: false,
        },
      },
    };

    new CircuitBreakerContainerService(stack, 'TestContainerService', props);

    const assert = Template.fromStack(stack);
    assert.hasResourceProperties('AWS::ECS::TaskDefinition', {
      Volumes: Match.arrayWith([Match.objectLike({
        Name: props.serviceConfiguration.ebsVolumeConfiguration?.volumeName,
      })]),
    });
  });

  it('configures monitoring with the correct error pattern and metrics', () => {
    props = {
      ...props,
      monitoringOptions: {
        errorPattern: 'CRITICAL',
        threshold: 5,
        evaluationPeriods: 3,
      },
    };

    new CircuitBreakerContainerService(stack, 'TestContainerService', props);

    const assert = Template.fromStack(stack);
    assert.hasResourceProperties('AWS::Logs::MetricFilter', {
      FilterPattern: props.monitoringOptions.errorPattern,
    });
    assert.hasResourceProperties('AWS::CloudWatch::Alarm', {
      Threshold: props.monitoringOptions.threshold,
      EvaluationPeriods: props.monitoringOptions.evaluationPeriods,
    });
  });

  it('configures paging with the provided email addresses when paging is enabled', () => {
    props = {
      ...props,
      monitoringOptions: {
        paging: {
          pagingEnabled: true,
          pageEmailAddresses: ['test@example.com'],
        },
      },
    };

    new CircuitBreakerContainerService(stack, 'TestContainerService', props);

    const assert = Template.fromStack(stack);
    assert.hasResourceProperties('AWS::SNS::Subscription', {
      Protocol: 'email',
      Endpoint: props.monitoringOptions.paging?.pageEmailAddresses[0],
    });
  });
});

