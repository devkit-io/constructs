import { Duration, RemovalPolicy } from 'aws-cdk-lib';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import { AttributeType } from 'aws-cdk-lib/aws-dynamodb';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as lambdaEventSources from 'aws-cdk-lib/aws-lambda-event-sources';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import { Construct } from 'constructs';
import { EncryptedDynamodbTable } from './encrypted-dynamodb-table';
import { MonitoredNodeLambda, MonitoredNodeLambdaProps } from './monitored-node-lambda';
import { QueueWithDLQ, QueueWithDLQProps } from './queue-with-dlq';

export interface TaskHandlingProps {
  readonly table?: dynamodb.ITable;
  readonly queue?: sqs.IQueue;
  readonly taskHandler?: lambda.IFunction;
  readonly lambdaProps?: MonitoredNodeLambdaProps;
  readonly queueProps?: QueueWithDLQProps;
  readonly tableRemovalPolicy?: RemovalPolicy;
}

/**
 * This construct sets up a task processing architecture using DynamoDB, SQS, and Lambda.
 * It ensures that the resources are interconnected and permissions are appropriately set.
 */
export class TaskHandlingConstruct extends Construct {
  public readonly table: dynamodb.ITable;
  public readonly queue: sqs.IQueue;
  public readonly taskHandler: lambda.IFunction;

  constructor(scope: Construct, id: string, props?: TaskHandlingProps) {
    super(scope, id);

    if (!props?.taskHandler && !props?.lambdaProps) {
      throw new Error('Either taskHandler or lambdaProps must be provided');
    }

    if (props?.table) {
      this.table = props.table;
    } else {
      this.table = new EncryptedDynamodbTable(this, 'TasksTable', {
        partitionKey: {
          name: 'user_id',
          type: AttributeType.STRING,
        },
        removalPolicy: props.tableRemovalPolicy ?? RemovalPolicy.DESTROY,
        sortKey: {
          name: 'id',
          type: AttributeType.STRING,
        },
        tableName: 'TaskQueueDb',
        ttlAttributeName: 'expires',
      }).table;
    }

    if (props?.queue) {
      this.queue = props.queue;
    } else {

      this.queue = new QueueWithDLQ(this, 'TaskQueue', {
        ...props.queueProps,
        visibilityTimeout: props.lambdaProps?.runtimeDuration ?? props.queueProps?.visibilityTimeout ?? Duration.minutes(15),
      },
      ).queue;
    }

    if (props?.taskHandler) {
      this.taskHandler = props.taskHandler;
    } else if (props?.lambdaProps) {
      this.taskHandler = new MonitoredNodeLambda(this, 'TaskHandler', {
        ...props.lambdaProps,
        runtimeEnvironment: {
          ...props.lambdaProps.runtimeEnvironment,
          TASKS_TABLE_NAME: this.table.tableName,
        },
      }).lambda;
    } else {
      throw new Error('Either taskHandler or lambdaProps must be provided');
    }
    this.taskHandler.addEventSource(new lambdaEventSources.SqsEventSource(this.queue));
    this.table.grantReadWriteData(this.taskHandler);
    this.queue.grantConsumeMessages(this.taskHandler);
  }
}
