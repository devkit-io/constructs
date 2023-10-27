import * as path from 'path';
import { DockerImage } from 'aws-cdk-lib';
import { Source } from 'aws-cdk-lib/aws-s3-deployment';
import { Construct } from 'constructs';
import { StaticSiteBase } from './static-site-base';

export interface DocusaurusSiteProps {
  readonly image?: DockerImage;
  readonly nodeEnv: string;
  readonly certificateArn?: string;
  readonly domainNames?: string[];
  readonly sourcePath?: string;
}

export class DocusaurusSite extends Construct {
  constructor(scope: Construct, id: string, props: DocusaurusSiteProps) {
    super(scope, id);

    const sourceAsset = Source.asset(props.sourcePath || path.join(__dirname, '../../source'), {
      bundling: {
        user: 'root',
        image: props.image ?? DockerImage.fromRegistry('node:18'),
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

    new StaticSiteBase(this, 'DocusaurusSiteBase', {
      certificateArn: props.certificateArn,
      domainNames: props.domainNames,
      sourceAsset: sourceAsset,
    });
  }
}