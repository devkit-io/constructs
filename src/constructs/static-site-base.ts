import { Certificate } from 'aws-cdk-lib/aws-certificatemanager';
import {
  CloudFrontWebDistribution,
  CloudFrontWebDistributionProps,
  OriginAccessIdentity,
  ViewerCertificate,
} from 'aws-cdk-lib/aws-cloudfront';
import { BlockPublicAccess, Bucket } from 'aws-cdk-lib/aws-s3';
import { BucketDeployment, ISource } from 'aws-cdk-lib/aws-s3-deployment';
import { Construct } from 'constructs';

export interface StaticSiteProps {
  readonly certificateArn?: string;
  readonly domainNames?: string[];
  readonly sourceAsset: ISource;
}

export class StaticSiteBase extends Construct {
  constructor(scope: Construct, id: string, props: StaticSiteProps) {
    super(scope, id);

    if ((props.certificateArn && !props.domainNames) || (!props.certificateArn && props.domainNames)) {
      throw new Error('Both certificateArn and domainNames must be provided if one is provided.');
    }

    const bucket = new Bucket(this, `${id}WebsiteBucket`, {
      websiteIndexDocument: 'index.html',
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
    });

    const originAccessIdentity = new OriginAccessIdentity(this, 'OAI');
    bucket.grantRead(originAccessIdentity);

    new BucketDeployment(this, `${id}DeployWebsite`, {
      sources: [props.sourceAsset],
      destinationBucket: bucket,
    });

    let distributionProps: CloudFrontWebDistributionProps = {
      originConfigs: [
        {
          s3OriginSource: {
            s3BucketSource: bucket,
            originAccessIdentity: originAccessIdentity,
          },
          behaviors: [{ isDefaultBehavior: true }],
        },
      ],
    };

    if (props.certificateArn && props.domainNames) {
      distributionProps = {
        ...distributionProps,
        viewerCertificate: ViewerCertificate.fromAcmCertificate(
          Certificate.fromCertificateArn(this, `${id}certificate`, props.certificateArn),
          { aliases: props.domainNames },
        ),
      };
    }

    new CloudFrontWebDistribution(this, `${id}WebsiteDistribution`, distributionProps);
  }
}
