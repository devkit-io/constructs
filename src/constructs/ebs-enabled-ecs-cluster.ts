import { Stack } from 'aws-cdk-lib';
import { AutoScalingGroup } from 'aws-cdk-lib/aws-autoscaling';
import { InstanceType, ISecurityGroup, IVpc } from 'aws-cdk-lib/aws-ec2';
import { AsgCapacityProvider, Cluster, EcsOptimizedImage } from 'aws-cdk-lib/aws-ecs';
import { Effect, PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';

/**
 * Properties required for the EbsEnabledEcsCluster.
 */
export interface EbsEnabledEcsClusterProps {
  readonly instanceType: InstanceType;
  readonly vpc: IVpc;
  readonly securityGroup: ISecurityGroup;
  readonly minCapacity: number;
  readonly maxCapacity: number;
  readonly desiredCapacity: number;
  readonly addEbsSupport?: boolean;
  readonly region: string;
  readonly machineImage?: EcsOptimizedImage;
  readonly newInstancesProtectedFromScaleIn?: boolean;
}

/**
 * A construct that creates an ECS Cluster with optional support for EBS volumes
 */
export class EbsEnabledEcsCluster extends Construct {
  readonly cluster: Cluster;

  constructor(scope: Construct, id: string, private readonly props: EbsEnabledEcsClusterProps) {
    super(scope, id);
    this.cluster = this.initializeCluster(props.vpc);
  }

  /**
   * Initializes the ECS cluster.
   * @param vpc The VPC in which the cluster will be created.
   */
  private initializeCluster(vpc: IVpc): Cluster {
    const autoScalingGroup = this.createAutoScalingGroup();

    if (this.props.addEbsSupport) {
      this.setupEbsSupport(autoScalingGroup);
    }

    const capacityProvider = new AsgCapacityProvider(this, 'AsgCapacityProvider', {
      autoScalingGroup,
    });
    const cluster = new Cluster(this, 'cluster', {
      vpc: vpc,
    });

    cluster.addAsgCapacityProvider(capacityProvider);
    return cluster;
  }

  /**
   * Set up EBS support for the auto-scaling group if required.
   * @param autoScalingGroup The auto-scaling group for which EBS support should be set up.
   */
  private setupEbsSupport(autoScalingGroup: AutoScalingGroup) {
    const currentStack = Stack.of(this);
    const region = currentStack.region;

    autoScalingGroup.addUserData(`docker plugin install rexray/ebs REXRAY_PREEMPT=true EBS_REGION=${region} --grant-all-permissions \nstop ecs \nstart ecs`);

    // EC2 actions required for rexray/ebs docker plugin support.
    const EC2_VOLUME_SNAPSHOT_ACTIONS = [
      'ec2:AttachVolume',
      'ec2:CreateVolume',
      'ec2:CreateSnapshot',
      'ec2:DeleteVolume',
      'ec2:DeleteSnapshot',
      'ec2:DetachVolume',
      'ec2:ModifySnapshotAttribute',
      'ec2:ModifyVolumeAttribute',
    ];

    const EC2_DESCRIBE_ACTIONS = [
      'ec2:DescribeAvailabilityZones',
      'ec2:DescribeInstances',
      'ec2:DescribeVolumes',
      'ec2:DescribeVolumeAttribute',
      'ec2:DescribeVolumeStatus',
      'ec2:DescribeSnapshots',
      'ec2:CopySnapshot',
      'ec2:DescribeSnapshotAttribute',
      'ec2:DescribeTags',
    ];

    autoScalingGroup.addToRolePolicy(new PolicyStatement({
      effect: Effect.ALLOW,
      actions: EC2_VOLUME_SNAPSHOT_ACTIONS,
      // TODO: this is not ideal, but unclear on how to tag the ebs volumes without significant effort.
      resources: ['*'],
    }));

    autoScalingGroup.addToRolePolicy(new PolicyStatement({
      effect: Effect.ALLOW,
      actions: EC2_DESCRIBE_ACTIONS,
      resources: ['*'],
    }));
  }


  /**
   * Creates an auto-scaling group with the defined configurations.
   */
  private createAutoScalingGroup() {
    return new AutoScalingGroup(this, 'auto-scaling-group', {
      securityGroup: this.props.securityGroup,
      instanceType: this.props.instanceType,
      minCapacity: this.props.minCapacity,
      maxCapacity: this.props.maxCapacity,
      desiredCapacity: this.props.desiredCapacity,
      vpc: this.props.vpc,
      machineImage: this.props.machineImage ?? EcsOptimizedImage.amazonLinux2(),
      newInstancesProtectedFromScaleIn: this.props.newInstancesProtectedFromScaleIn ?? false,
    });
  }
}
