import * as path from 'path';
import { DockerImage, Duration } from 'aws-cdk-lib';
import { Certificate } from 'aws-cdk-lib/aws-certificatemanager';
import {
  CloudFrontWebDistribution,
  CloudFrontWebDistributionProps,
  OriginAccessIdentity,
  ViewerCertificate,
} from 'aws-cdk-lib/aws-cloudfront';
import { BlockPublicAccess, Bucket } from 'aws-cdk-lib/aws-s3';
import { Source, BucketDeployment } from 'aws-cdk-lib/aws-s3-deployment';
import { Construct } from 'constructs';

export interface DocusaurusSiteProps {
  readonly nodeEnv: string;
  readonly certificateArn?: string;
  readonly domainNames?: string[];
  readonly sourcePath?: string;
}

export class DocusaurusSite extends Construct {
  constructor(scope: Construct, id: string, props: DocusaurusSiteProps) {
    super(scope, id);

    const bucket = new Bucket(scope, 'WebsiteBucket', {
      websiteIndexDocument: 'index.html',
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL, // We'll block all public access now
    });

    const originAccessIdentity = new OriginAccessIdentity(scope, 'OAI');
    bucket.grantRead(originAccessIdentity);

    const codeAssets = Source.asset(props.sourcePath || path.join(__dirname, '../../source'), {
      bundling: {
        user: 'root',
        image: DockerImage.fromRegistry('node:18'),
        command: [
          'bash', '-c', [
            'npm install',
            `NODE_ENV=${props.nodeEnv} npm run build`,
            'cp -au build/* /asset-output',
          ].join(' && '),
        ],
        environment: {
          GENERATE_SOURCEMAP: 'false',
        },
      },
    });

    new BucketDeployment(scope, 'DeployWebsite', {
      sources: [codeAssets],
      destinationBucket: bucket,
    });

    let distributionProps: CloudFrontWebDistributionProps = {
      originConfigs: [
        {
          s3OriginSource: {
            s3BucketSource: bucket,
            originAccessIdentity: originAccessIdentity,
          },
          behaviors: [
            {
              isDefaultBehavior: true,
            },
            {
              isDefaultBehavior: false,
              pathPattern: 'index.html',
              defaultTtl: Duration.seconds(0),
              minTtl: Duration.seconds(0),
              maxTtl: Duration.seconds(0),
            },
          ],
        },
      ],
      errorConfigurations: [{
        errorCode: 403,
        responseCode: 200,
        responsePagePath: '/index.html',
        errorCachingMinTtl: 10,
      }],
    };

    if (props.certificateArn && props.domainNames) {
      distributionProps = {
        ...distributionProps,
        viewerCertificate: ViewerCertificate.fromAcmCertificate(
          Certificate.fromCertificateArn(scope, 'certificate', props.certificateArn),
          { aliases: props.domainNames },
        ),
      };
    }

    new CloudFrontWebDistribution(scope, 'WebsiteDistribution', distributionProps);
  }
}
