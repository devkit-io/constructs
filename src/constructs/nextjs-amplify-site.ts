import { App, AutoBranchCreation } from '@aws-cdk/aws-amplify-alpha';
import { GitHubSourceCodeProvider } from '@aws-cdk/aws-amplify-alpha/lib/source-code-providers';
import { CfnOutput, SecretValue } from 'aws-cdk-lib';
import { CfnApp, CfnBranch } from 'aws-cdk-lib/aws-amplify';
import { BuildSpec } from 'aws-cdk-lib/aws-codebuild';
import { ManagedPolicy, Role, ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';


/**
 * Configuration for the Amplify application deployment.
 */
export interface NextJsAmplifySiteProps {
  readonly accessTokenName: string;
  readonly repoOwner: string;
  readonly repoName: string;
  readonly environmentVariables: { [key: string]: string };
}


export class NextJsAmplifySite extends Construct {
  constructor(scope: Construct, id: string, props: NextJsAmplifySiteProps) {
    super(scope, id);

    const role = new Role(this, 'AmplifyRoleWebApp', {
      assumedBy: new ServicePrincipal('amplify.amazonaws.com'),
      description: 'Custom role permitting resources creation from Amplify',
      managedPolicies: [ManagedPolicy.fromAwsManagedPolicyName('AdministratorAccess-Amplify')],
    });

    const sourceCodeProvider = new GitHubSourceCodeProvider({
      oauthToken: SecretValue.secretsManager(props.accessTokenName),
      owner: props.repoOwner,
      repository: props.repoName,
    });

    const buildSpec = this.createBuildSpec(props);

    const amplifyApp = new App(this, 'AmplifyAppResource', {
      appName: props.repoName,
      description: 'Next.js App deployed with Dev-kit',
      role,
      sourceCodeProvider,
      buildSpec,
      autoBranchCreation: this.autoBranchCreationConfig(),
      autoBranchDeletion: true,
      environmentVariables: props.environmentVariables,
    });

    const cfnApp = amplifyApp.node.defaultChild as CfnApp;
    cfnApp.platform = 'WEB_COMPUTE';

    const mainBranch = amplifyApp.addBranch('main', {
      autoBuild: true,
      stage: 'PRODUCTION',
    });


    const cfnBranch = mainBranch.node.defaultChild as CfnBranch;
    cfnBranch.framework = 'Next.js - SSR';

    new CfnOutput(this, `AmplifyAppId-${props.repoName}`, {
      value: amplifyApp.appId,
    });

    // const domain = amplifyApp.addDomain('your-domain.com', {
    //   autoSubdomainCreationPatterns: ['feature/*'],
    //   enableAutoSubdomain: true,
    // });
    //
    // domain.mapRoot(mainBranch);
  }

  private createBuildSpec(props: NextJsAmplifySiteProps): BuildSpec {
    return BuildSpec.fromObjectToYaml({
      version: '1.0',
      applications: [
        {
          appRoot: 'source',
          frontend: {
            phases: {
              preBuild: {
                commands: [
                  'nvm use',
                  'corepack enable',
                  'corepack prepare pnpm@latest --activate',
                  'export NODE_OPTIONS=--max-old-space-size=8192',
                  'pnpm install --virtual-store-dir ./node_modules/.pnpm',
                  'pnpm install',
                ],
              },
              build: {
                commands: [
                  `env | grep -E '${Object.keys(props.environmentVariables).join('|')}' >> .env.production`,
                  'pnpm next build --no-lint',
                ],
              },
            },
          },
        },
      ],
      artifacts: {
        baseDirectory: '.next',
        files: ['**/*'],
      },
    });
  }

  private autoBranchCreationConfig(): AutoBranchCreation {
    return {
      autoBuild: true,
      patterns: ['feature/*'],
      pullRequestPreview: true,
    };
  }
}