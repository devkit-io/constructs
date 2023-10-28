import { Stack } from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import { InstanceType } from 'aws-cdk-lib/aws-ec2';
import { EbsEnabledEcsCluster, EbsEnabledEcsClusterProps } from '../../src';

const mockVpc: any = {
  vpcId: 'mockVpcId',
  selectSubnets: jest.fn().mockReturnValue({ subnetIds: ['mockSubnetId'] }),
};
const mockSecurityGroup: any = {};
const mockInstanceType = { instanceTypeIdentifier: 'mockType' } as unknown as InstanceType;

const defaultProps: EbsEnabledEcsClusterProps = {
  instanceType: mockInstanceType,
  vpc: mockVpc,
  securityGroup: mockSecurityGroup,
  minCapacity: 1,
  maxCapacity: 5,
  desiredCapacity: 2,
  region: 'us-west-2',
};

describe('EbsEnabledEcsCluster', () => {
  it('creates an ECS cluster', () => {
    const stack = new Stack();

    new EbsEnabledEcsCluster(stack, 'TestCluster', defaultProps);

    const template = Template.fromStack(stack);

    template.hasResource('AWS::ECS::Cluster', {});
  });

  it('sets up EBS support if addEbsSupport is true', () => {
    const stack = new Stack();

    new EbsEnabledEcsCluster(stack, 'TestClusterWithEbs', {
      ...defaultProps,
      addEbsSupport: true,
    });

    const template = Template.fromStack(stack);

    // Check if the required EC2 permissions are added
    template.hasResourceProperties('AWS::IAM::Policy', {
      PolicyDocument: {
        Statement: Match.arrayWith([
          Match.objectLike({
            Action: Match.arrayWith(['ec2:AttachVolume', 'ec2:CreateVolume']),
          }),
        ]),
      },
    });
  });

  it('creates an auto-scaling group with default configurations', () => {
    const stack = new Stack();

    new EbsEnabledEcsCluster(stack, 'TestCluster', defaultProps);

    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::AutoScaling::AutoScalingGroup', {
      DesiredCapacity: defaultProps.desiredCapacity.toString(),
      MinSize: defaultProps.minCapacity.toString(),
      MaxSize: defaultProps.maxCapacity.toString(),
    });
  });

  it('does not set up EBS support if addEbsSupport is false', () => {
    const stack = new Stack();

    new EbsEnabledEcsCluster(stack, 'TestClusterWithoutEbs', {
      ...defaultProps,
      addEbsSupport: false,
    });

    const template = Template.fromStack(stack);

    // Check if EC2 permissions are not added
    expect(() => {
      template.hasResourceProperties('AWS::IAM::Policy', {
        PolicyDocument: {
          Statement: Match.arrayWith([
            Match.objectLike({
              Action: Match.arrayWith(['ec2:AttachVolume', 'ec2:CreateVolume']),
            }),
          ]),
        },
      });
    }).toThrow();
  });

  it('uses the default machine image if none is provided', () => {
    const stack = new Stack();

    new EbsEnabledEcsCluster(stack, 'TestClusterWithDefaultImage', defaultProps);

    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::AutoScaling::LaunchConfiguration', {
      ImageId: {
        Ref: Match.stringLikeRegexp('SsmParameterValueawsserviceecsoptimizedamiamazonlinux2recommendedimageid*'),
      },
    });
  });
});
