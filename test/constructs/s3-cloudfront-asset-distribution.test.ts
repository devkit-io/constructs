import { Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { S3CloudfrontAssetDistribution } from '../../src';

describe('S3CloudfrontAssetDistribution', () => {

  test('Distributes with default properties', () => {
    // GIVEN
    const stack = new Stack();

    // WHEN
    new S3CloudfrontAssetDistribution(stack, 'MyDistribution', {});

    // THEN
    const assert = Template.fromStack(stack);
    assert.resourceCountIs('AWS::S3::Bucket', 1);
    assert.resourceCountIs('AWS::CloudFront::Distribution', 1);
  });

  test('Distributes with a certificate', () => {
    // GIVEN
    const stack = new Stack();

    // WHEN
    new S3CloudfrontAssetDistribution(stack, 'MyDistributionWithCert', {
      certificateArn: 'arn:aws:acm:us-east-1:account:certificate/id',
      domainNames: ['example.com'],
    });

    // THEN
    const assert = Template.fromStack(stack);
    assert.hasResourceProperties('AWS::CloudFront::Distribution', {
      DistributionConfig: {
        ViewerCertificate: {
          AcmCertificateArn: 'arn:aws:acm:us-east-1:account:certificate/id',
        },
      },
    });
  });
});

// ... Add more tests as needed for other configurations and edge cases
