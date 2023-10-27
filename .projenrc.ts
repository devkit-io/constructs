import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'ColeMurray',
  authorAddress: 'colemurray.cs@gmail.com',
  cdkVersion: '2.103.1',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.0.0',
  name: 'devkit-constructs',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/devkit-io/constructs.git',
  peerDeps: [
    '@aws-cdk/aws-amplify-alpha',
  ],
  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  packageName: '@devkit-io/constructs', /* The "name" in package.json. */
});
project.synth();