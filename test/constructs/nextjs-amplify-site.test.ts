import { Stack } from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import { NextJsAmplifySite, NextJsAmplifySiteProps } from '../../src';

describe('NextJsAmplifySite', () => {
  const defaultProps: NextJsAmplifySiteProps = {
    accessTokenName: 'testToken',
    repoOwner: 'testOwner',
    repoName: 'testRepo',
    environmentVariables: {
      TEST_VAR: 'value',
    },
  };

  test('should create a basic Amplify App with the main branch', () => {
    const stack = new Stack();
    new NextJsAmplifySite(stack, 'TestConstruct', defaultProps);

    const assert = Template.fromStack(stack);
    assert.resourceCountIs('AWS::Amplify::App', 1);
    assert.resourceCountIs('AWS::Amplify::Branch', 1);
    assert.resourceCountIs('AWS::IAM::Role', 1);
    assert.hasOutput('*', {
      Description: Match.anyValue(),
      Value: Match.anyValue(),
    });
  });

  test('should optionally add a custom domain if domainName is provided', () => {
    const stackWithDomain = new Stack();
    new NextJsAmplifySite(stackWithDomain, 'TestConstructWithDomain', {
      ...defaultProps,
      domainName: 'example.com',
    });

    const assertWithDomain = Template.fromStack(stackWithDomain);
    assertWithDomain.resourceCountIs('AWS::Amplify::Domain', 1);
  });

  test('should not add a custom domain if domainName is not provided', () => {
    const stackWithoutDomain = new Stack();
    new NextJsAmplifySite(stackWithoutDomain, 'TestConstructWithoutDomain', defaultProps);

    const assertWithoutDomain = Template.fromStack(stackWithoutDomain);
    assertWithoutDomain.resourceCountIs('AWS::Amplify::Domain', 0);
  });

});
