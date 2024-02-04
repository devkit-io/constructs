import { RemovalPolicy } from 'aws-cdk-lib';
import { Attribute, BillingMode, GlobalSecondaryIndexProps, Table, TableEncryption } from 'aws-cdk-lib/aws-dynamodb';
import { Key } from 'aws-cdk-lib/aws-kms';
import { Construct } from 'constructs';

/**
 * Properties for creating an encrypted DynamoDB table with a KMS key.
 */
export interface EncryptedDynamodbTableProps {
  readonly tableName: string;
  readonly partitionKey: Attribute;
  readonly sortKey?: Attribute;
  readonly removalPolicy?: RemovalPolicy;
  readonly gsiIndices?: GlobalSecondaryIndexProps[];
  readonly ttlAttributeName?: string;
  readonly billingMode?: BillingMode;
  readonly pointInTimeRecovery?: boolean;
  readonly kmsKeyDescription?: string;
  readonly existingKmsKey?: Key;
}

/**
 * A construct for creating an encrypted DynamoDB table with a customer-managed KMS key.
 */
export class EncryptedDynamodbTable extends Construct {
  readonly table: Table;
  readonly kmsKey: Key;

  constructor(scope: Construct, id: string, props: EncryptedDynamodbTableProps) {
    super(scope, id);

    // Create or use an existing KMS key
    this.kmsKey = props.existingKmsKey ?? new Key(this, 'kmsKey', {
      description: props.kmsKeyDescription ?? `KMS key for ${props.tableName} DynamoDB table`,
    });

    // Create a new DynamoDB table
    this.table = new Table(this, 'table', {
      tableName: props.tableName,
      billingMode: props.billingMode ?? BillingMode.PAY_PER_REQUEST,
      partitionKey: props.partitionKey,
      sortKey: props.sortKey,
      pointInTimeRecovery: props.pointInTimeRecovery ?? true,
      encryption: TableEncryption.CUSTOMER_MANAGED,
      encryptionKey: this.kmsKey,
      removalPolicy: props.removalPolicy ?? RemovalPolicy.DESTROY,
      timeToLiveAttribute: props.ttlAttributeName ?? 'ttl',
    });

    // Add any global secondary indices
    props.gsiIndices?.forEach(gsiIndex => {
      this.table.addGlobalSecondaryIndex(gsiIndex);
    });
  }
}
