import { Certificate } from 'aws-cdk-lib/aws-certificatemanager';
import { Distribution, OriginAccessIdentity } from 'aws-cdk-lib/aws-cloudfront';
import { S3Origin } from 'aws-cdk-lib/aws-cloudfront-origins';
import { Bucket, BlockPublicAccess } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

export interface S3CloudfrontAssetDistributionProps {
  readonly certificateArn?: string;
  readonly domainNames?: string[];
}

export class S3CloudfrontAssetDistribution extends Construct {
  constructor(scope: Construct, id: string, props: S3CloudfrontAssetDistributionProps) {
    super(scope, id);

    const bucket = new Bucket(this, 'AssetBucket', {
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
    });

    const originAccessIdentity = new OriginAccessIdentity(this, 'OAI');
    bucket.grantRead(originAccessIdentity);

    const distributionProps: any = {
      defaultBehavior: {
        origin: new S3Origin(bucket, {
          originAccessIdentity: originAccessIdentity,
        }),
      },
    };

    if (props.certificateArn) {
      distributionProps.certificate = Certificate.fromCertificateArn(this, 'Certificate', props.certificateArn);
    }

    if (props.domainNames && props.domainNames.length > 0) {
      distributionProps.domainNames = props.domainNames;
    }

    new Distribution(this, 'AssetCdnDistribution', distributionProps);
  }
}
