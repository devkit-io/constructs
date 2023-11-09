import { Duration } from 'aws-cdk-lib';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import { Construct } from 'constructs';

export interface QueueWithDLQProps {
  readonly visibilityTimeout: Duration;
  readonly dlqRetentionPeriod?: Duration;
  readonly maxReceiveCount?: number;
}

export class QueueWithDLQ extends Construct {
  public readonly queue: sqs.Queue;
  public readonly deadLetterQueue: sqs.Queue;

  constructor(scope: Construct, id: string, props: QueueWithDLQProps) {
    super(scope, id);

    if (props.visibilityTimeout.toSeconds() < 0) {
      throw new Error('VisibilityTimeout must be positive');
    }

    this.deadLetterQueue = new sqs.Queue(this, `${id}-DeadLetterQueue`, {
      retentionPeriod: props.dlqRetentionPeriod || Duration.days(3),
    });

    this.queue = new sqs.Queue(this, `${id}-MainQueue`, {
      visibilityTimeout: props.visibilityTimeout,
      deadLetterQueue: {
        queue: this.deadLetterQueue,
        maxReceiveCount: props.maxReceiveCount || 5,
      },
    });
  }
}
