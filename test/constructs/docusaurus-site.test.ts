import * as path from 'path';
import { Stack } from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import { Source } from 'aws-cdk-lib/aws-s3-deployment';
import { DocusaurusSite } from '../../src';

jest.spyOn(Source, 'asset').mockImplementation(() => {
  return {
    bind: jest.fn().mockReturnValue({
      bucket: {
        bucketName: 'mockBucket',
      },
    }),
    isBound: jest.fn().mockReturnValue(true),
    assetHash: 'mockAssetHash',
    sourceHash: 'mockSourceHash',
    sourcePath: 'mockSourcePath',
    zipObjectKey: 'mockZipObjectKey',
    s3UrlForObject: jest.fn(),
    resolve: jest.fn(),
    s3ObjectKey: 'mockObjectKey',
    isZipArchive: true,
    bucket: jest.fn(),
  } as any;
});

describe('DocusaurusSite', () => {

  test('creates an S3 bucket and CloudFront distribution', () => {
    const stack = new Stack();
    new DocusaurusSite(stack, 'TestSite', {
      nodeEnv: 'production',
      sourcePath: path.join(__dirname, '..', '/mocks/test-lambda-code'),
    });

    const assert = Template.fromStack(stack);
    assert.resourceCountIs('AWS::S3::Bucket', 1);
    assert.resourceCountIs('AWS::CloudFront::Distribution', 1);
  });

  test('uses an Origin Access Identity for S3', () => {
    const stack = new Stack();
    new DocusaurusSite(stack, 'TestSite', {
      nodeEnv: 'production',
      sourcePath: path.join(__dirname, '..', '/mocks/test-lambda-code'),
    });

    const assert = Template.fromStack(stack);
    assert.hasResourceProperties('AWS::CloudFront::Distribution', {
      DistributionConfig: {
        Origins: [{
          S3OriginConfig: {
            OriginAccessIdentity: {
              'Fn::Join': [
                '',
                [
                  'origin-access-identity/cloudfront/',
                  {
                    Ref: Match.anyValue(),
                  },
                ],
              ],
            },
          },
        }],
      },
    });
  });

  test('includes a viewer certificate when provided', () => {
    const stack = new Stack();
    new DocusaurusSite(stack, 'TestSite', {
      nodeEnv: 'production',
      certificateArn: 'arn:aws:acm:region:account:certificate/id',
      domainNames: ['example.com'],
      sourcePath: path.join(__dirname, '..', '/mocks/test-lambda-code'),
    });

    const assert = Template.fromStack(stack);
    assert.hasResourceProperties('AWS::CloudFront::Distribution', {
      DistributionConfig: {
        ViewerCertificate: {
          AcmCertificateArn: 'arn:aws:acm:region:account:certificate/id',
          SslSupportMethod: 'sni-only',
        },
      },
    });
  });

  test('does not include a viewer certificate when not provided', () => {
    const stack = new Stack();
    new DocusaurusSite(stack, 'TestSite', {
      nodeEnv: 'production',
      sourcePath: path.join(__dirname, '..', '/mocks/test-lambda-code'),
    });

    const assert = Template.fromStack(stack);
    assert.hasResourceProperties('AWS::CloudFront::Distribution',
      {
        DistributionConfig: {
          ViewerCertificate: {
            CloudFrontDefaultCertificate: true,
          },
        },
      });
  });

});

