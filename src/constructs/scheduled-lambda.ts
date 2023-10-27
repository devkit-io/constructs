import { Rule, Schedule } from 'aws-cdk-lib/aws-events';
import { LambdaFunction as LambdaTargetFunction } from 'aws-cdk-lib/aws-events-targets';
import { Function as LambdaFunctionResource, Runtime } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import { MonitoredNodeLambda } from './monitored-node-lambda';

export interface ScheduledLambdaProps {
  readonly scheduleExpression: string; // Cron or rate expression for the schedule.
  readonly codePath?: string; // Path to the Lambda function's source code.
  readonly handler?: string; // Handler for the Lambda function.
  readonly runtime?: Runtime; // Runtime environment for the Lambda function.
  readonly environment?: { [key: string]: string }; // Environment variables for the Lambda function.
  readonly lambdaFunction?: LambdaFunctionResource; // An existing Lambda function to schedule.
}

/**
 * A construct to create a scheduled Lambda function.
 * This can either create a new MonitoredNodeLambda or use an existing Lambda function.
 */
export class ScheduledLambda extends Construct {
  constructor(scope: Construct, id: string, props: ScheduledLambdaProps) {
    super(scope, id);

    // Ensure appropriate properties are provided.
    if (!props.lambdaFunction && (!props.codePath || !props.handler)) {
      throw new Error('You must provide either lambdaFunction or both codePath and handler.');
    }

    // Create or use the provided Lambda function.
    const lambda = props.lambdaFunction ?? new MonitoredNodeLambda(this, `${id}MonitoredLambda`, {
      codeDir: props.codePath!,
      handler: props.handler!,
      runtime: props.runtime,
      runtimeEnvironment: props.environment,
      description: 'Scheduled Lambda function',
    }).lambda;

    // Create the scheduled rule for the Lambda function.
    const rule = new Rule(this, `${id}ScheduleRule`, {
      schedule: Schedule.expression(props.scheduleExpression),
    });

    // Add the Lambda function as the target for the rule.
    rule.addTarget(new LambdaTargetFunction(lambda));
  }
}
