# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CircuitBreakerContainerService <a name="CircuitBreakerContainerService" id="@devkit-io/constructs.CircuitBreakerContainerService"></a>

The `CircuitBreakerContainerService` class creates an ECS Service on a provided ECS cluster and attaches to the provided target groups.

Features include:
- Logging with customizable retention periods
- Circuit breaker rollback configurations
- Optional EBS volume configurations and mounts
- Customizable monitoring and alerting based on log patterns

#### Initializers <a name="Initializers" id="@devkit-io/constructs.CircuitBreakerContainerService.Initializer"></a>

```typescript
import { CircuitBreakerContainerService } from '@devkit-io/constructs'

new CircuitBreakerContainerService(scope: Construct, id: string, props: CircuitBreakerContainerServiceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@devkit-io/constructs.CircuitBreakerContainerService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.CircuitBreakerContainerService.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.CircuitBreakerContainerService.Initializer.parameter.props">props</a></code> | <code><a href="#@devkit-io/constructs.CircuitBreakerContainerServiceProps">CircuitBreakerContainerServiceProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@devkit-io/constructs.CircuitBreakerContainerService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@devkit-io/constructs.CircuitBreakerContainerService.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@devkit-io/constructs.CircuitBreakerContainerService.Initializer.parameter.props"></a>

- *Type:* <a href="#@devkit-io/constructs.CircuitBreakerContainerServiceProps">CircuitBreakerContainerServiceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@devkit-io/constructs.CircuitBreakerContainerService.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@devkit-io/constructs.CircuitBreakerContainerService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@devkit-io/constructs.CircuitBreakerContainerService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@devkit-io/constructs.CircuitBreakerContainerService.isConstruct"></a>

```typescript
import { CircuitBreakerContainerService } from '@devkit-io/constructs'

CircuitBreakerContainerService.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@devkit-io/constructs.CircuitBreakerContainerService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@devkit-io/constructs.CircuitBreakerContainerService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@devkit-io/constructs.CircuitBreakerContainerService.property.service">service</a></code> | <code>aws-cdk-lib.aws_ecs.Ec2Service</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.CircuitBreakerContainerService.property.serviceRole">serviceRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@devkit-io/constructs.CircuitBreakerContainerService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `service`<sup>Required</sup> <a name="service" id="@devkit-io/constructs.CircuitBreakerContainerService.property.service"></a>

```typescript
public readonly service: Ec2Service;
```

- *Type:* aws-cdk-lib.aws_ecs.Ec2Service

---

##### `serviceRole`<sup>Required</sup> <a name="serviceRole" id="@devkit-io/constructs.CircuitBreakerContainerService.property.serviceRole"></a>

```typescript
public readonly serviceRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

---


### DocusaurusSite <a name="DocusaurusSite" id="@devkit-io/constructs.DocusaurusSite"></a>

#### Initializers <a name="Initializers" id="@devkit-io/constructs.DocusaurusSite.Initializer"></a>

```typescript
import { DocusaurusSite } from '@devkit-io/constructs'

new DocusaurusSite(scope: Construct, id: string, props: DocusaurusSiteProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@devkit-io/constructs.DocusaurusSite.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.DocusaurusSite.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.DocusaurusSite.Initializer.parameter.props">props</a></code> | <code><a href="#@devkit-io/constructs.DocusaurusSiteProps">DocusaurusSiteProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@devkit-io/constructs.DocusaurusSite.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@devkit-io/constructs.DocusaurusSite.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@devkit-io/constructs.DocusaurusSite.Initializer.parameter.props"></a>

- *Type:* <a href="#@devkit-io/constructs.DocusaurusSiteProps">DocusaurusSiteProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@devkit-io/constructs.DocusaurusSite.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@devkit-io/constructs.DocusaurusSite.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@devkit-io/constructs.DocusaurusSite.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@devkit-io/constructs.DocusaurusSite.isConstruct"></a>

```typescript
import { DocusaurusSite } from '@devkit-io/constructs'

DocusaurusSite.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@devkit-io/constructs.DocusaurusSite.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@devkit-io/constructs.DocusaurusSite.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@devkit-io/constructs.DocusaurusSite.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### EbsEnabledEcsCluster <a name="EbsEnabledEcsCluster" id="@devkit-io/constructs.EbsEnabledEcsCluster"></a>

A construct that creates an ECS Cluster with optional support for EBS volumes.

#### Initializers <a name="Initializers" id="@devkit-io/constructs.EbsEnabledEcsCluster.Initializer"></a>

```typescript
import { EbsEnabledEcsCluster } from '@devkit-io/constructs'

new EbsEnabledEcsCluster(scope: Construct, id: string, props: EbsEnabledEcsClusterProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@devkit-io/constructs.EbsEnabledEcsCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.EbsEnabledEcsCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.EbsEnabledEcsCluster.Initializer.parameter.props">props</a></code> | <code><a href="#@devkit-io/constructs.EbsEnabledEcsClusterProps">EbsEnabledEcsClusterProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@devkit-io/constructs.EbsEnabledEcsCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@devkit-io/constructs.EbsEnabledEcsCluster.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@devkit-io/constructs.EbsEnabledEcsCluster.Initializer.parameter.props"></a>

- *Type:* <a href="#@devkit-io/constructs.EbsEnabledEcsClusterProps">EbsEnabledEcsClusterProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@devkit-io/constructs.EbsEnabledEcsCluster.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@devkit-io/constructs.EbsEnabledEcsCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@devkit-io/constructs.EbsEnabledEcsCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@devkit-io/constructs.EbsEnabledEcsCluster.isConstruct"></a>

```typescript
import { EbsEnabledEcsCluster } from '@devkit-io/constructs'

EbsEnabledEcsCluster.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@devkit-io/constructs.EbsEnabledEcsCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@devkit-io/constructs.EbsEnabledEcsCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@devkit-io/constructs.EbsEnabledEcsCluster.property.cluster">cluster</a></code> | <code>aws-cdk-lib.aws_ecs.Cluster</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@devkit-io/constructs.EbsEnabledEcsCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@devkit-io/constructs.EbsEnabledEcsCluster.property.cluster"></a>

```typescript
public readonly cluster: Cluster;
```

- *Type:* aws-cdk-lib.aws_ecs.Cluster

---


### EncryptedDynamodbTable <a name="EncryptedDynamodbTable" id="@devkit-io/constructs.EncryptedDynamodbTable"></a>

A construct for creating an encrypted DynamoDB table with a customer-managed KMS key.

#### Initializers <a name="Initializers" id="@devkit-io/constructs.EncryptedDynamodbTable.Initializer"></a>

```typescript
import { EncryptedDynamodbTable } from '@devkit-io/constructs'

new EncryptedDynamodbTable(scope: Construct, id: string, props: EncryptedDynamodbTableProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@devkit-io/constructs.EncryptedDynamodbTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.EncryptedDynamodbTable.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.EncryptedDynamodbTable.Initializer.parameter.props">props</a></code> | <code><a href="#@devkit-io/constructs.EncryptedDynamodbTableProps">EncryptedDynamodbTableProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@devkit-io/constructs.EncryptedDynamodbTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@devkit-io/constructs.EncryptedDynamodbTable.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@devkit-io/constructs.EncryptedDynamodbTable.Initializer.parameter.props"></a>

- *Type:* <a href="#@devkit-io/constructs.EncryptedDynamodbTableProps">EncryptedDynamodbTableProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@devkit-io/constructs.EncryptedDynamodbTable.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@devkit-io/constructs.EncryptedDynamodbTable.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@devkit-io/constructs.EncryptedDynamodbTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@devkit-io/constructs.EncryptedDynamodbTable.isConstruct"></a>

```typescript
import { EncryptedDynamodbTable } from '@devkit-io/constructs'

EncryptedDynamodbTable.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@devkit-io/constructs.EncryptedDynamodbTable.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@devkit-io/constructs.EncryptedDynamodbTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@devkit-io/constructs.EncryptedDynamodbTable.property.kmsKey">kmsKey</a></code> | <code>aws-cdk-lib.aws_kms.Key</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.EncryptedDynamodbTable.property.table">table</a></code> | <code>aws-cdk-lib.aws_dynamodb.Table</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@devkit-io/constructs.EncryptedDynamodbTable.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@devkit-io/constructs.EncryptedDynamodbTable.property.kmsKey"></a>

```typescript
public readonly kmsKey: Key;
```

- *Type:* aws-cdk-lib.aws_kms.Key

---

##### `table`<sup>Required</sup> <a name="table" id="@devkit-io/constructs.EncryptedDynamodbTable.property.table"></a>

```typescript
public readonly table: Table;
```

- *Type:* aws-cdk-lib.aws_dynamodb.Table

---


### MonitoredNodeLambda <a name="MonitoredNodeLambda" id="@devkit-io/constructs.MonitoredNodeLambda"></a>

A construct to create a monitored Node.js Lambda function with deployment capabilities.

#### Initializers <a name="Initializers" id="@devkit-io/constructs.MonitoredNodeLambda.Initializer"></a>

```typescript
import { MonitoredNodeLambda } from '@devkit-io/constructs'

new MonitoredNodeLambda(scope: Construct, id: string, props: MonitoredNodeLambdaProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@devkit-io/constructs.MonitoredNodeLambda.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.MonitoredNodeLambda.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.MonitoredNodeLambda.Initializer.parameter.props">props</a></code> | <code><a href="#@devkit-io/constructs.MonitoredNodeLambdaProps">MonitoredNodeLambdaProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@devkit-io/constructs.MonitoredNodeLambda.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@devkit-io/constructs.MonitoredNodeLambda.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@devkit-io/constructs.MonitoredNodeLambda.Initializer.parameter.props"></a>

- *Type:* <a href="#@devkit-io/constructs.MonitoredNodeLambdaProps">MonitoredNodeLambdaProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@devkit-io/constructs.MonitoredNodeLambda.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@devkit-io/constructs.MonitoredNodeLambda.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@devkit-io/constructs.MonitoredNodeLambda.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@devkit-io/constructs.MonitoredNodeLambda.isConstruct"></a>

```typescript
import { MonitoredNodeLambda } from '@devkit-io/constructs'

MonitoredNodeLambda.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@devkit-io/constructs.MonitoredNodeLambda.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@devkit-io/constructs.MonitoredNodeLambda.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@devkit-io/constructs.MonitoredNodeLambda.property.alarm">alarm</a></code> | <code>aws-cdk-lib.aws_cloudwatch.Alarm</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.MonitoredNodeLambda.property.deploymentGroup">deploymentGroup</a></code> | <code>aws-cdk-lib.aws_codedeploy.LambdaDeploymentGroup</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.MonitoredNodeLambda.property.lambda">lambda</a></code> | <code>aws-cdk-lib.aws_lambda.Function</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@devkit-io/constructs.MonitoredNodeLambda.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `alarm`<sup>Required</sup> <a name="alarm" id="@devkit-io/constructs.MonitoredNodeLambda.property.alarm"></a>

```typescript
public readonly alarm: Alarm;
```

- *Type:* aws-cdk-lib.aws_cloudwatch.Alarm

---

##### `deploymentGroup`<sup>Required</sup> <a name="deploymentGroup" id="@devkit-io/constructs.MonitoredNodeLambda.property.deploymentGroup"></a>

```typescript
public readonly deploymentGroup: LambdaDeploymentGroup;
```

- *Type:* aws-cdk-lib.aws_codedeploy.LambdaDeploymentGroup

---

##### `lambda`<sup>Required</sup> <a name="lambda" id="@devkit-io/constructs.MonitoredNodeLambda.property.lambda"></a>

```typescript
public readonly lambda: Function;
```

- *Type:* aws-cdk-lib.aws_lambda.Function

---


### NextJsAmplifySite <a name="NextJsAmplifySite" id="@devkit-io/constructs.NextJsAmplifySite"></a>

#### Initializers <a name="Initializers" id="@devkit-io/constructs.NextJsAmplifySite.Initializer"></a>

```typescript
import { NextJsAmplifySite } from '@devkit-io/constructs'

new NextJsAmplifySite(scope: Construct, id: string, props: NextJsAmplifySiteProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@devkit-io/constructs.NextJsAmplifySite.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.NextJsAmplifySite.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.NextJsAmplifySite.Initializer.parameter.props">props</a></code> | <code><a href="#@devkit-io/constructs.NextJsAmplifySiteProps">NextJsAmplifySiteProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@devkit-io/constructs.NextJsAmplifySite.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@devkit-io/constructs.NextJsAmplifySite.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@devkit-io/constructs.NextJsAmplifySite.Initializer.parameter.props"></a>

- *Type:* <a href="#@devkit-io/constructs.NextJsAmplifySiteProps">NextJsAmplifySiteProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@devkit-io/constructs.NextJsAmplifySite.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@devkit-io/constructs.NextJsAmplifySite.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@devkit-io/constructs.NextJsAmplifySite.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@devkit-io/constructs.NextJsAmplifySite.isConstruct"></a>

```typescript
import { NextJsAmplifySite } from '@devkit-io/constructs'

NextJsAmplifySite.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@devkit-io/constructs.NextJsAmplifySite.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@devkit-io/constructs.NextJsAmplifySite.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@devkit-io/constructs.NextJsAmplifySite.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### QueueWithDLQ <a name="QueueWithDLQ" id="@devkit-io/constructs.QueueWithDLQ"></a>

#### Initializers <a name="Initializers" id="@devkit-io/constructs.QueueWithDLQ.Initializer"></a>

```typescript
import { QueueWithDLQ } from '@devkit-io/constructs'

new QueueWithDLQ(scope: Construct, id: string, props: QueueWithDLQProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@devkit-io/constructs.QueueWithDLQ.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.QueueWithDLQ.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.QueueWithDLQ.Initializer.parameter.props">props</a></code> | <code><a href="#@devkit-io/constructs.QueueWithDLQProps">QueueWithDLQProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@devkit-io/constructs.QueueWithDLQ.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@devkit-io/constructs.QueueWithDLQ.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@devkit-io/constructs.QueueWithDLQ.Initializer.parameter.props"></a>

- *Type:* <a href="#@devkit-io/constructs.QueueWithDLQProps">QueueWithDLQProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@devkit-io/constructs.QueueWithDLQ.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@devkit-io/constructs.QueueWithDLQ.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@devkit-io/constructs.QueueWithDLQ.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@devkit-io/constructs.QueueWithDLQ.isConstruct"></a>

```typescript
import { QueueWithDLQ } from '@devkit-io/constructs'

QueueWithDLQ.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@devkit-io/constructs.QueueWithDLQ.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@devkit-io/constructs.QueueWithDLQ.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@devkit-io/constructs.QueueWithDLQ.property.deadLetterQueue">deadLetterQueue</a></code> | <code>aws-cdk-lib.aws_sqs.Queue</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.QueueWithDLQ.property.queue">queue</a></code> | <code>aws-cdk-lib.aws_sqs.Queue</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@devkit-io/constructs.QueueWithDLQ.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `deadLetterQueue`<sup>Required</sup> <a name="deadLetterQueue" id="@devkit-io/constructs.QueueWithDLQ.property.deadLetterQueue"></a>

```typescript
public readonly deadLetterQueue: Queue;
```

- *Type:* aws-cdk-lib.aws_sqs.Queue

---

##### `queue`<sup>Required</sup> <a name="queue" id="@devkit-io/constructs.QueueWithDLQ.property.queue"></a>

```typescript
public readonly queue: Queue;
```

- *Type:* aws-cdk-lib.aws_sqs.Queue

---


### S3CloudfrontAssetDistribution <a name="S3CloudfrontAssetDistribution" id="@devkit-io/constructs.S3CloudfrontAssetDistribution"></a>

#### Initializers <a name="Initializers" id="@devkit-io/constructs.S3CloudfrontAssetDistribution.Initializer"></a>

```typescript
import { S3CloudfrontAssetDistribution } from '@devkit-io/constructs'

new S3CloudfrontAssetDistribution(scope: Construct, id: string, props: S3CloudfrontAssetDistributionProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@devkit-io/constructs.S3CloudfrontAssetDistribution.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.S3CloudfrontAssetDistribution.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.S3CloudfrontAssetDistribution.Initializer.parameter.props">props</a></code> | <code><a href="#@devkit-io/constructs.S3CloudfrontAssetDistributionProps">S3CloudfrontAssetDistributionProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@devkit-io/constructs.S3CloudfrontAssetDistribution.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@devkit-io/constructs.S3CloudfrontAssetDistribution.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@devkit-io/constructs.S3CloudfrontAssetDistribution.Initializer.parameter.props"></a>

- *Type:* <a href="#@devkit-io/constructs.S3CloudfrontAssetDistributionProps">S3CloudfrontAssetDistributionProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@devkit-io/constructs.S3CloudfrontAssetDistribution.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@devkit-io/constructs.S3CloudfrontAssetDistribution.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@devkit-io/constructs.S3CloudfrontAssetDistribution.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@devkit-io/constructs.S3CloudfrontAssetDistribution.isConstruct"></a>

```typescript
import { S3CloudfrontAssetDistribution } from '@devkit-io/constructs'

S3CloudfrontAssetDistribution.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@devkit-io/constructs.S3CloudfrontAssetDistribution.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@devkit-io/constructs.S3CloudfrontAssetDistribution.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@devkit-io/constructs.S3CloudfrontAssetDistribution.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### S3EventTriggeredLambda <a name="S3EventTriggeredLambda" id="@devkit-io/constructs.S3EventTriggeredLambda"></a>

A construct to create a Lambda function triggered by S3 bucket creation events.

This can either create a new MonitoredNodeLambda or use an existing Lambda function.

#### Initializers <a name="Initializers" id="@devkit-io/constructs.S3EventTriggeredLambda.Initializer"></a>

```typescript
import { S3EventTriggeredLambda } from '@devkit-io/constructs'

new S3EventTriggeredLambda(scope: Construct, id: string, props: S3EventLambdaProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@devkit-io/constructs.S3EventTriggeredLambda.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.S3EventTriggeredLambda.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.S3EventTriggeredLambda.Initializer.parameter.props">props</a></code> | <code><a href="#@devkit-io/constructs.S3EventLambdaProps">S3EventLambdaProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@devkit-io/constructs.S3EventTriggeredLambda.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@devkit-io/constructs.S3EventTriggeredLambda.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@devkit-io/constructs.S3EventTriggeredLambda.Initializer.parameter.props"></a>

- *Type:* <a href="#@devkit-io/constructs.S3EventLambdaProps">S3EventLambdaProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@devkit-io/constructs.S3EventTriggeredLambda.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@devkit-io/constructs.S3EventTriggeredLambda.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@devkit-io/constructs.S3EventTriggeredLambda.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@devkit-io/constructs.S3EventTriggeredLambda.isConstruct"></a>

```typescript
import { S3EventTriggeredLambda } from '@devkit-io/constructs'

S3EventTriggeredLambda.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@devkit-io/constructs.S3EventTriggeredLambda.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@devkit-io/constructs.S3EventTriggeredLambda.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@devkit-io/constructs.S3EventTriggeredLambda.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### ScheduledLambda <a name="ScheduledLambda" id="@devkit-io/constructs.ScheduledLambda"></a>

A construct to create a scheduled Lambda function.

This can either create a new MonitoredNodeLambda or use an existing Lambda function.

#### Initializers <a name="Initializers" id="@devkit-io/constructs.ScheduledLambda.Initializer"></a>

```typescript
import { ScheduledLambda } from '@devkit-io/constructs'

new ScheduledLambda(scope: Construct, id: string, props: ScheduledLambdaProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@devkit-io/constructs.ScheduledLambda.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.ScheduledLambda.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.ScheduledLambda.Initializer.parameter.props">props</a></code> | <code><a href="#@devkit-io/constructs.ScheduledLambdaProps">ScheduledLambdaProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@devkit-io/constructs.ScheduledLambda.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@devkit-io/constructs.ScheduledLambda.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@devkit-io/constructs.ScheduledLambda.Initializer.parameter.props"></a>

- *Type:* <a href="#@devkit-io/constructs.ScheduledLambdaProps">ScheduledLambdaProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@devkit-io/constructs.ScheduledLambda.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@devkit-io/constructs.ScheduledLambda.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@devkit-io/constructs.ScheduledLambda.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@devkit-io/constructs.ScheduledLambda.isConstruct"></a>

```typescript
import { ScheduledLambda } from '@devkit-io/constructs'

ScheduledLambda.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@devkit-io/constructs.ScheduledLambda.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@devkit-io/constructs.ScheduledLambda.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@devkit-io/constructs.ScheduledLambda.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### SelfMutatingPipeline <a name="SelfMutatingPipeline" id="@devkit-io/constructs.SelfMutatingPipeline"></a>

#### Initializers <a name="Initializers" id="@devkit-io/constructs.SelfMutatingPipeline.Initializer"></a>

```typescript
import { SelfMutatingPipeline } from '@devkit-io/constructs'

new SelfMutatingPipeline(scope: Construct, id: string, props: SelfMutatingPipelineProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@devkit-io/constructs.SelfMutatingPipeline.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.SelfMutatingPipeline.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.SelfMutatingPipeline.Initializer.parameter.props">props</a></code> | <code><a href="#@devkit-io/constructs.SelfMutatingPipelineProps">SelfMutatingPipelineProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@devkit-io/constructs.SelfMutatingPipeline.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@devkit-io/constructs.SelfMutatingPipeline.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@devkit-io/constructs.SelfMutatingPipeline.Initializer.parameter.props"></a>

- *Type:* <a href="#@devkit-io/constructs.SelfMutatingPipelineProps">SelfMutatingPipelineProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@devkit-io/constructs.SelfMutatingPipeline.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@devkit-io/constructs.SelfMutatingPipeline.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@devkit-io/constructs.SelfMutatingPipeline.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@devkit-io/constructs.SelfMutatingPipeline.isConstruct"></a>

```typescript
import { SelfMutatingPipeline } from '@devkit-io/constructs'

SelfMutatingPipeline.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@devkit-io/constructs.SelfMutatingPipeline.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@devkit-io/constructs.SelfMutatingPipeline.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@devkit-io/constructs.SelfMutatingPipeline.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### StaticSiteBase <a name="StaticSiteBase" id="@devkit-io/constructs.StaticSiteBase"></a>

#### Initializers <a name="Initializers" id="@devkit-io/constructs.StaticSiteBase.Initializer"></a>

```typescript
import { StaticSiteBase } from '@devkit-io/constructs'

new StaticSiteBase(scope: Construct, id: string, props: StaticSiteProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@devkit-io/constructs.StaticSiteBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.StaticSiteBase.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.StaticSiteBase.Initializer.parameter.props">props</a></code> | <code><a href="#@devkit-io/constructs.StaticSiteProps">StaticSiteProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@devkit-io/constructs.StaticSiteBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@devkit-io/constructs.StaticSiteBase.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@devkit-io/constructs.StaticSiteBase.Initializer.parameter.props"></a>

- *Type:* <a href="#@devkit-io/constructs.StaticSiteProps">StaticSiteProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@devkit-io/constructs.StaticSiteBase.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@devkit-io/constructs.StaticSiteBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@devkit-io/constructs.StaticSiteBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@devkit-io/constructs.StaticSiteBase.isConstruct"></a>

```typescript
import { StaticSiteBase } from '@devkit-io/constructs'

StaticSiteBase.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@devkit-io/constructs.StaticSiteBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@devkit-io/constructs.StaticSiteBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@devkit-io/constructs.StaticSiteBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### TaskHandlingConstruct <a name="TaskHandlingConstruct" id="@devkit-io/constructs.TaskHandlingConstruct"></a>

This construct sets up a task processing architecture using DynamoDB, SQS, and Lambda.

It ensures that the resources are interconnected and permissions are appropriately set.

#### Initializers <a name="Initializers" id="@devkit-io/constructs.TaskHandlingConstruct.Initializer"></a>

```typescript
import { TaskHandlingConstruct } from '@devkit-io/constructs'

new TaskHandlingConstruct(scope: Construct, id: string, props?: TaskHandlingProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@devkit-io/constructs.TaskHandlingConstruct.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.TaskHandlingConstruct.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.TaskHandlingConstruct.Initializer.parameter.props">props</a></code> | <code><a href="#@devkit-io/constructs.TaskHandlingProps">TaskHandlingProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@devkit-io/constructs.TaskHandlingConstruct.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@devkit-io/constructs.TaskHandlingConstruct.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="@devkit-io/constructs.TaskHandlingConstruct.Initializer.parameter.props"></a>

- *Type:* <a href="#@devkit-io/constructs.TaskHandlingProps">TaskHandlingProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@devkit-io/constructs.TaskHandlingConstruct.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@devkit-io/constructs.TaskHandlingConstruct.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@devkit-io/constructs.TaskHandlingConstruct.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@devkit-io/constructs.TaskHandlingConstruct.isConstruct"></a>

```typescript
import { TaskHandlingConstruct } from '@devkit-io/constructs'

TaskHandlingConstruct.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@devkit-io/constructs.TaskHandlingConstruct.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@devkit-io/constructs.TaskHandlingConstruct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@devkit-io/constructs.TaskHandlingConstruct.property.queue">queue</a></code> | <code>aws-cdk-lib.aws_sqs.IQueue</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.TaskHandlingConstruct.property.table">table</a></code> | <code>aws-cdk-lib.aws_dynamodb.ITable</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.TaskHandlingConstruct.property.taskHandler">taskHandler</a></code> | <code>aws-cdk-lib.aws_lambda.IFunction</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@devkit-io/constructs.TaskHandlingConstruct.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `queue`<sup>Required</sup> <a name="queue" id="@devkit-io/constructs.TaskHandlingConstruct.property.queue"></a>

```typescript
public readonly queue: IQueue;
```

- *Type:* aws-cdk-lib.aws_sqs.IQueue

---

##### `table`<sup>Required</sup> <a name="table" id="@devkit-io/constructs.TaskHandlingConstruct.property.table"></a>

```typescript
public readonly table: ITable;
```

- *Type:* aws-cdk-lib.aws_dynamodb.ITable

---

##### `taskHandler`<sup>Required</sup> <a name="taskHandler" id="@devkit-io/constructs.TaskHandlingConstruct.property.taskHandler"></a>

```typescript
public readonly taskHandler: IFunction;
```

- *Type:* aws-cdk-lib.aws_lambda.IFunction

---


## Structs <a name="Structs" id="Structs"></a>

### CircuitBreakerContainerServiceProps <a name="CircuitBreakerContainerServiceProps" id="@devkit-io/constructs.CircuitBreakerContainerServiceProps"></a>

#### Initializer <a name="Initializer" id="@devkit-io/constructs.CircuitBreakerContainerServiceProps.Initializer"></a>

```typescript
import { CircuitBreakerContainerServiceProps } from '@devkit-io/constructs'

const circuitBreakerContainerServiceProps: CircuitBreakerContainerServiceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@devkit-io/constructs.CircuitBreakerContainerServiceProps.property.cluster">cluster</a></code> | <code>aws-cdk-lib.aws_ecs.ICluster</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.CircuitBreakerContainerServiceProps.property.monitoringOptions">monitoringOptions</a></code> | <code><a href="#@devkit-io/constructs.MonitoringOptions">MonitoringOptions</a></code> | *No description.* |
| <code><a href="#@devkit-io/constructs.CircuitBreakerContainerServiceProps.property.serviceConfiguration">serviceConfiguration</a></code> | <code><a href="#@devkit-io/constructs.ServiceConfiguration">ServiceConfiguration</a></code> | *No description.* |
| <code><a href="#@devkit-io/constructs.CircuitBreakerContainerServiceProps.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.CircuitBreakerContainerServiceProps.property.targetGroupArns">targetGroupArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.CircuitBreakerContainerServiceProps.property.certificate">certificate</a></code> | <code>aws-cdk-lib.aws_certificatemanager.ICertificate</code> | *No description.* |

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@devkit-io/constructs.CircuitBreakerContainerServiceProps.property.cluster"></a>

```typescript
public readonly cluster: ICluster;
```

- *Type:* aws-cdk-lib.aws_ecs.ICluster

---

##### `monitoringOptions`<sup>Required</sup> <a name="monitoringOptions" id="@devkit-io/constructs.CircuitBreakerContainerServiceProps.property.monitoringOptions"></a>

```typescript
public readonly monitoringOptions: MonitoringOptions;
```

- *Type:* <a href="#@devkit-io/constructs.MonitoringOptions">MonitoringOptions</a>

---

##### `serviceConfiguration`<sup>Required</sup> <a name="serviceConfiguration" id="@devkit-io/constructs.CircuitBreakerContainerServiceProps.property.serviceConfiguration"></a>

```typescript
public readonly serviceConfiguration: ServiceConfiguration;
```

- *Type:* <a href="#@devkit-io/constructs.ServiceConfiguration">ServiceConfiguration</a>

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@devkit-io/constructs.CircuitBreakerContainerServiceProps.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `targetGroupArns`<sup>Required</sup> <a name="targetGroupArns" id="@devkit-io/constructs.CircuitBreakerContainerServiceProps.property.targetGroupArns"></a>

```typescript
public readonly targetGroupArns: string[];
```

- *Type:* string[]

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@devkit-io/constructs.CircuitBreakerContainerServiceProps.property.certificate"></a>

```typescript
public readonly certificate: ICertificate;
```

- *Type:* aws-cdk-lib.aws_certificatemanager.ICertificate

---

### DocusaurusSiteProps <a name="DocusaurusSiteProps" id="@devkit-io/constructs.DocusaurusSiteProps"></a>

#### Initializer <a name="Initializer" id="@devkit-io/constructs.DocusaurusSiteProps.Initializer"></a>

```typescript
import { DocusaurusSiteProps } from '@devkit-io/constructs'

const docusaurusSiteProps: DocusaurusSiteProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@devkit-io/constructs.DocusaurusSiteProps.property.nodeEnv">nodeEnv</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.DocusaurusSiteProps.property.certificateArn">certificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.DocusaurusSiteProps.property.domainNames">domainNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.DocusaurusSiteProps.property.image">image</a></code> | <code>aws-cdk-lib.DockerImage</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.DocusaurusSiteProps.property.sourcePath">sourcePath</a></code> | <code>string</code> | *No description.* |

---

##### `nodeEnv`<sup>Required</sup> <a name="nodeEnv" id="@devkit-io/constructs.DocusaurusSiteProps.property.nodeEnv"></a>

```typescript
public readonly nodeEnv: string;
```

- *Type:* string

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="@devkit-io/constructs.DocusaurusSiteProps.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

---

##### `domainNames`<sup>Optional</sup> <a name="domainNames" id="@devkit-io/constructs.DocusaurusSiteProps.property.domainNames"></a>

```typescript
public readonly domainNames: string[];
```

- *Type:* string[]

---

##### `image`<sup>Optional</sup> <a name="image" id="@devkit-io/constructs.DocusaurusSiteProps.property.image"></a>

```typescript
public readonly image: DockerImage;
```

- *Type:* aws-cdk-lib.DockerImage

---

##### `sourcePath`<sup>Optional</sup> <a name="sourcePath" id="@devkit-io/constructs.DocusaurusSiteProps.property.sourcePath"></a>

```typescript
public readonly sourcePath: string;
```

- *Type:* string

---

### EbsEnabledEcsClusterProps <a name="EbsEnabledEcsClusterProps" id="@devkit-io/constructs.EbsEnabledEcsClusterProps"></a>

Properties required for the EbsEnabledEcsCluster.

#### Initializer <a name="Initializer" id="@devkit-io/constructs.EbsEnabledEcsClusterProps.Initializer"></a>

```typescript
import { EbsEnabledEcsClusterProps } from '@devkit-io/constructs'

const ebsEnabledEcsClusterProps: EbsEnabledEcsClusterProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@devkit-io/constructs.EbsEnabledEcsClusterProps.property.desiredCapacity">desiredCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.EbsEnabledEcsClusterProps.property.instanceType">instanceType</a></code> | <code>aws-cdk-lib.aws_ec2.InstanceType</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.EbsEnabledEcsClusterProps.property.maxCapacity">maxCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.EbsEnabledEcsClusterProps.property.minCapacity">minCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.EbsEnabledEcsClusterProps.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.EbsEnabledEcsClusterProps.property.securityGroup">securityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.EbsEnabledEcsClusterProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.EbsEnabledEcsClusterProps.property.addEbsSupport">addEbsSupport</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.EbsEnabledEcsClusterProps.property.machineImage">machineImage</a></code> | <code>aws-cdk-lib.aws_ecs.EcsOptimizedImage</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.EbsEnabledEcsClusterProps.property.newInstancesProtectedFromScaleIn">newInstancesProtectedFromScaleIn</a></code> | <code>boolean</code> | *No description.* |

---

##### `desiredCapacity`<sup>Required</sup> <a name="desiredCapacity" id="@devkit-io/constructs.EbsEnabledEcsClusterProps.property.desiredCapacity"></a>

```typescript
public readonly desiredCapacity: number;
```

- *Type:* number

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@devkit-io/constructs.EbsEnabledEcsClusterProps.property.instanceType"></a>

```typescript
public readonly instanceType: InstanceType;
```

- *Type:* aws-cdk-lib.aws_ec2.InstanceType

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@devkit-io/constructs.EbsEnabledEcsClusterProps.property.maxCapacity"></a>

```typescript
public readonly maxCapacity: number;
```

- *Type:* number

---

##### `minCapacity`<sup>Required</sup> <a name="minCapacity" id="@devkit-io/constructs.EbsEnabledEcsClusterProps.property.minCapacity"></a>

```typescript
public readonly minCapacity: number;
```

- *Type:* number

---

##### `region`<sup>Required</sup> <a name="region" id="@devkit-io/constructs.EbsEnabledEcsClusterProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `securityGroup`<sup>Required</sup> <a name="securityGroup" id="@devkit-io/constructs.EbsEnabledEcsClusterProps.property.securityGroup"></a>

```typescript
public readonly securityGroup: ISecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@devkit-io/constructs.EbsEnabledEcsClusterProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---

##### `addEbsSupport`<sup>Optional</sup> <a name="addEbsSupport" id="@devkit-io/constructs.EbsEnabledEcsClusterProps.property.addEbsSupport"></a>

```typescript
public readonly addEbsSupport: boolean;
```

- *Type:* boolean

---

##### `machineImage`<sup>Optional</sup> <a name="machineImage" id="@devkit-io/constructs.EbsEnabledEcsClusterProps.property.machineImage"></a>

```typescript
public readonly machineImage: EcsOptimizedImage;
```

- *Type:* aws-cdk-lib.aws_ecs.EcsOptimizedImage

---

##### `newInstancesProtectedFromScaleIn`<sup>Optional</sup> <a name="newInstancesProtectedFromScaleIn" id="@devkit-io/constructs.EbsEnabledEcsClusterProps.property.newInstancesProtectedFromScaleIn"></a>

```typescript
public readonly newInstancesProtectedFromScaleIn: boolean;
```

- *Type:* boolean

---

### EbsVolumeConfiguration <a name="EbsVolumeConfiguration" id="@devkit-io/constructs.EbsVolumeConfiguration"></a>

#### Initializer <a name="Initializer" id="@devkit-io/constructs.EbsVolumeConfiguration.Initializer"></a>

```typescript
import { EbsVolumeConfiguration } from '@devkit-io/constructs'

const ebsVolumeConfiguration: EbsVolumeConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@devkit-io/constructs.EbsVolumeConfiguration.property.deleteOnTermination">deleteOnTermination</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.EbsVolumeConfiguration.property.mountPoint">mountPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.EbsVolumeConfiguration.property.readOnly">readOnly</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.EbsVolumeConfiguration.property.volumeName">volumeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.EbsVolumeConfiguration.property.volumeSize">volumeSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.EbsVolumeConfiguration.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |

---

##### `deleteOnTermination`<sup>Required</sup> <a name="deleteOnTermination" id="@devkit-io/constructs.EbsVolumeConfiguration.property.deleteOnTermination"></a>

```typescript
public readonly deleteOnTermination: boolean;
```

- *Type:* boolean

---

##### `mountPoint`<sup>Required</sup> <a name="mountPoint" id="@devkit-io/constructs.EbsVolumeConfiguration.property.mountPoint"></a>

```typescript
public readonly mountPoint: string;
```

- *Type:* string

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@devkit-io/constructs.EbsVolumeConfiguration.property.readOnly"></a>

```typescript
public readonly readOnly: boolean;
```

- *Type:* boolean

---

##### `volumeName`<sup>Required</sup> <a name="volumeName" id="@devkit-io/constructs.EbsVolumeConfiguration.property.volumeName"></a>

```typescript
public readonly volumeName: string;
```

- *Type:* string

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@devkit-io/constructs.EbsVolumeConfiguration.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@devkit-io/constructs.EbsVolumeConfiguration.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

### EncryptedDynamodbTableProps <a name="EncryptedDynamodbTableProps" id="@devkit-io/constructs.EncryptedDynamodbTableProps"></a>

Properties for creating an encrypted DynamoDB table with a KMS key.

#### Initializer <a name="Initializer" id="@devkit-io/constructs.EncryptedDynamodbTableProps.Initializer"></a>

```typescript
import { EncryptedDynamodbTableProps } from '@devkit-io/constructs'

const encryptedDynamodbTableProps: EncryptedDynamodbTableProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@devkit-io/constructs.EncryptedDynamodbTableProps.property.partitionKey">partitionKey</a></code> | <code>aws-cdk-lib.aws_dynamodb.Attribute</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.EncryptedDynamodbTableProps.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.EncryptedDynamodbTableProps.property.billingMode">billingMode</a></code> | <code>aws-cdk-lib.aws_dynamodb.BillingMode</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.EncryptedDynamodbTableProps.property.existingKmsKey">existingKmsKey</a></code> | <code>aws-cdk-lib.aws_kms.Key</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.EncryptedDynamodbTableProps.property.gsiIndices">gsiIndices</a></code> | <code>aws-cdk-lib.aws_dynamodb.GlobalSecondaryIndexProps[]</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.EncryptedDynamodbTableProps.property.kmsKeyDescription">kmsKeyDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.EncryptedDynamodbTableProps.property.pointInTimeRecovery">pointInTimeRecovery</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.EncryptedDynamodbTableProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.EncryptedDynamodbTableProps.property.sortKey">sortKey</a></code> | <code>aws-cdk-lib.aws_dynamodb.Attribute</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.EncryptedDynamodbTableProps.property.ttlAttributeName">ttlAttributeName</a></code> | <code>string</code> | *No description.* |

---

##### `partitionKey`<sup>Required</sup> <a name="partitionKey" id="@devkit-io/constructs.EncryptedDynamodbTableProps.property.partitionKey"></a>

```typescript
public readonly partitionKey: Attribute;
```

- *Type:* aws-cdk-lib.aws_dynamodb.Attribute

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@devkit-io/constructs.EncryptedDynamodbTableProps.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `billingMode`<sup>Optional</sup> <a name="billingMode" id="@devkit-io/constructs.EncryptedDynamodbTableProps.property.billingMode"></a>

```typescript
public readonly billingMode: BillingMode;
```

- *Type:* aws-cdk-lib.aws_dynamodb.BillingMode

---

##### `existingKmsKey`<sup>Optional</sup> <a name="existingKmsKey" id="@devkit-io/constructs.EncryptedDynamodbTableProps.property.existingKmsKey"></a>

```typescript
public readonly existingKmsKey: Key;
```

- *Type:* aws-cdk-lib.aws_kms.Key

---

##### `gsiIndices`<sup>Optional</sup> <a name="gsiIndices" id="@devkit-io/constructs.EncryptedDynamodbTableProps.property.gsiIndices"></a>

```typescript
public readonly gsiIndices: GlobalSecondaryIndexProps[];
```

- *Type:* aws-cdk-lib.aws_dynamodb.GlobalSecondaryIndexProps[]

---

##### `kmsKeyDescription`<sup>Optional</sup> <a name="kmsKeyDescription" id="@devkit-io/constructs.EncryptedDynamodbTableProps.property.kmsKeyDescription"></a>

```typescript
public readonly kmsKeyDescription: string;
```

- *Type:* string

---

##### `pointInTimeRecovery`<sup>Optional</sup> <a name="pointInTimeRecovery" id="@devkit-io/constructs.EncryptedDynamodbTableProps.property.pointInTimeRecovery"></a>

```typescript
public readonly pointInTimeRecovery: boolean;
```

- *Type:* boolean

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@devkit-io/constructs.EncryptedDynamodbTableProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `sortKey`<sup>Optional</sup> <a name="sortKey" id="@devkit-io/constructs.EncryptedDynamodbTableProps.property.sortKey"></a>

```typescript
public readonly sortKey: Attribute;
```

- *Type:* aws-cdk-lib.aws_dynamodb.Attribute

---

##### `ttlAttributeName`<sup>Optional</sup> <a name="ttlAttributeName" id="@devkit-io/constructs.EncryptedDynamodbTableProps.property.ttlAttributeName"></a>

```typescript
public readonly ttlAttributeName: string;
```

- *Type:* string

---

### EnvironmentVariable <a name="EnvironmentVariable" id="@devkit-io/constructs.EnvironmentVariable"></a>

#### Initializer <a name="Initializer" id="@devkit-io/constructs.EnvironmentVariable.Initializer"></a>

```typescript
import { EnvironmentVariable } from '@devkit-io/constructs'

const environmentVariable: EnvironmentVariable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@devkit-io/constructs.EnvironmentVariable.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.EnvironmentVariable.property.type">type</a></code> | <code>aws-cdk-lib.aws_codebuild.BuildEnvironmentVariableType</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.EnvironmentVariable.property.value">value</a></code> | <code>string</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="@devkit-io/constructs.EnvironmentVariable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@devkit-io/constructs.EnvironmentVariable.property.type"></a>

```typescript
public readonly type: BuildEnvironmentVariableType;
```

- *Type:* aws-cdk-lib.aws_codebuild.BuildEnvironmentVariableType

---

##### `value`<sup>Required</sup> <a name="value" id="@devkit-io/constructs.EnvironmentVariable.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

### MonitoredNodeLambdaProps <a name="MonitoredNodeLambdaProps" id="@devkit-io/constructs.MonitoredNodeLambdaProps"></a>

#### Initializer <a name="Initializer" id="@devkit-io/constructs.MonitoredNodeLambdaProps.Initializer"></a>

```typescript
import { MonitoredNodeLambdaProps } from '@devkit-io/constructs'

const monitoredNodeLambdaProps: MonitoredNodeLambdaProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@devkit-io/constructs.MonitoredNodeLambdaProps.property.codeDir">codeDir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.MonitoredNodeLambdaProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.MonitoredNodeLambdaProps.property.handler">handler</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.MonitoredNodeLambdaProps.property.alarmEvaluationPeriod">alarmEvaluationPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.MonitoredNodeLambdaProps.property.alarmThreshold">alarmThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.MonitoredNodeLambdaProps.property.bundleCommand">bundleCommand</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.MonitoredNodeLambdaProps.property.bundleEnvironment">bundleEnvironment</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.MonitoredNodeLambdaProps.property.deploymentConfig">deploymentConfig</a></code> | <code>aws-cdk-lib.aws_codedeploy.LambdaDeploymentConfig</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.MonitoredNodeLambdaProps.property.memorySize">memorySize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.MonitoredNodeLambdaProps.property.runtime">runtime</a></code> | <code>aws-cdk-lib.aws_lambda.Runtime</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.MonitoredNodeLambdaProps.property.runtimeDuration">runtimeDuration</a></code> | <code>aws-cdk-lib.Duration</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.MonitoredNodeLambdaProps.property.runtimeEnvironment">runtimeEnvironment</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `codeDir`<sup>Required</sup> <a name="codeDir" id="@devkit-io/constructs.MonitoredNodeLambdaProps.property.codeDir"></a>

```typescript
public readonly codeDir: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@devkit-io/constructs.MonitoredNodeLambdaProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `handler`<sup>Required</sup> <a name="handler" id="@devkit-io/constructs.MonitoredNodeLambdaProps.property.handler"></a>

```typescript
public readonly handler: string;
```

- *Type:* string

---

##### `alarmEvaluationPeriod`<sup>Optional</sup> <a name="alarmEvaluationPeriod" id="@devkit-io/constructs.MonitoredNodeLambdaProps.property.alarmEvaluationPeriod"></a>

```typescript
public readonly alarmEvaluationPeriod: number;
```

- *Type:* number

---

##### `alarmThreshold`<sup>Optional</sup> <a name="alarmThreshold" id="@devkit-io/constructs.MonitoredNodeLambdaProps.property.alarmThreshold"></a>

```typescript
public readonly alarmThreshold: number;
```

- *Type:* number

---

##### `bundleCommand`<sup>Optional</sup> <a name="bundleCommand" id="@devkit-io/constructs.MonitoredNodeLambdaProps.property.bundleCommand"></a>

```typescript
public readonly bundleCommand: string[];
```

- *Type:* string[]

---

##### `bundleEnvironment`<sup>Optional</sup> <a name="bundleEnvironment" id="@devkit-io/constructs.MonitoredNodeLambdaProps.property.bundleEnvironment"></a>

```typescript
public readonly bundleEnvironment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deploymentConfig`<sup>Optional</sup> <a name="deploymentConfig" id="@devkit-io/constructs.MonitoredNodeLambdaProps.property.deploymentConfig"></a>

```typescript
public readonly deploymentConfig: LambdaDeploymentConfig;
```

- *Type:* aws-cdk-lib.aws_codedeploy.LambdaDeploymentConfig

---

##### `memorySize`<sup>Optional</sup> <a name="memorySize" id="@devkit-io/constructs.MonitoredNodeLambdaProps.property.memorySize"></a>

```typescript
public readonly memorySize: number;
```

- *Type:* number

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@devkit-io/constructs.MonitoredNodeLambdaProps.property.runtime"></a>

```typescript
public readonly runtime: Runtime;
```

- *Type:* aws-cdk-lib.aws_lambda.Runtime

---

##### `runtimeDuration`<sup>Optional</sup> <a name="runtimeDuration" id="@devkit-io/constructs.MonitoredNodeLambdaProps.property.runtimeDuration"></a>

```typescript
public readonly runtimeDuration: Duration;
```

- *Type:* aws-cdk-lib.Duration

---

##### `runtimeEnvironment`<sup>Optional</sup> <a name="runtimeEnvironment" id="@devkit-io/constructs.MonitoredNodeLambdaProps.property.runtimeEnvironment"></a>

```typescript
public readonly runtimeEnvironment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

### MonitoringOptions <a name="MonitoringOptions" id="@devkit-io/constructs.MonitoringOptions"></a>

`MonitoringOptions` provides configurations for setting up monitoring for the service.

It supports setting up paging alerts and customizing error patterns for metric filters.

#### Initializer <a name="Initializer" id="@devkit-io/constructs.MonitoringOptions.Initializer"></a>

```typescript
import { MonitoringOptions } from '@devkit-io/constructs'

const monitoringOptions: MonitoringOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@devkit-io/constructs.MonitoringOptions.property.errorPattern">errorPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.MonitoringOptions.property.evaluationPeriods">evaluationPeriods</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.MonitoringOptions.property.paging">paging</a></code> | <code><a href="#@devkit-io/constructs.PagingOptions">PagingOptions</a></code> | *No description.* |
| <code><a href="#@devkit-io/constructs.MonitoringOptions.property.threshold">threshold</a></code> | <code>number</code> | *No description.* |

---

##### `errorPattern`<sup>Optional</sup> <a name="errorPattern" id="@devkit-io/constructs.MonitoringOptions.property.errorPattern"></a>

```typescript
public readonly errorPattern: string;
```

- *Type:* string

---

##### `evaluationPeriods`<sup>Optional</sup> <a name="evaluationPeriods" id="@devkit-io/constructs.MonitoringOptions.property.evaluationPeriods"></a>

```typescript
public readonly evaluationPeriods: number;
```

- *Type:* number

---

##### `paging`<sup>Optional</sup> <a name="paging" id="@devkit-io/constructs.MonitoringOptions.property.paging"></a>

```typescript
public readonly paging: PagingOptions;
```

- *Type:* <a href="#@devkit-io/constructs.PagingOptions">PagingOptions</a>

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@devkit-io/constructs.MonitoringOptions.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

---

### NextJsAmplifySiteProps <a name="NextJsAmplifySiteProps" id="@devkit-io/constructs.NextJsAmplifySiteProps"></a>

Configuration for the Amplify application deployment.

#### Initializer <a name="Initializer" id="@devkit-io/constructs.NextJsAmplifySiteProps.Initializer"></a>

```typescript
import { NextJsAmplifySiteProps } from '@devkit-io/constructs'

const nextJsAmplifySiteProps: NextJsAmplifySiteProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@devkit-io/constructs.NextJsAmplifySiteProps.property.accessTokenName">accessTokenName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.NextJsAmplifySiteProps.property.environmentVariables">environmentVariables</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.NextJsAmplifySiteProps.property.repoName">repoName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.NextJsAmplifySiteProps.property.repoOwner">repoOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.NextJsAmplifySiteProps.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |

---

##### `accessTokenName`<sup>Required</sup> <a name="accessTokenName" id="@devkit-io/constructs.NextJsAmplifySiteProps.property.accessTokenName"></a>

```typescript
public readonly accessTokenName: string;
```

- *Type:* string

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@devkit-io/constructs.NextJsAmplifySiteProps.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `repoName`<sup>Required</sup> <a name="repoName" id="@devkit-io/constructs.NextJsAmplifySiteProps.property.repoName"></a>

```typescript
public readonly repoName: string;
```

- *Type:* string

---

##### `repoOwner`<sup>Required</sup> <a name="repoOwner" id="@devkit-io/constructs.NextJsAmplifySiteProps.property.repoOwner"></a>

```typescript
public readonly repoOwner: string;
```

- *Type:* string

---

##### `domainName`<sup>Optional</sup> <a name="domainName" id="@devkit-io/constructs.NextJsAmplifySiteProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

### PagingOptions <a name="PagingOptions" id="@devkit-io/constructs.PagingOptions"></a>

`PagingOptions` defines the configuration for setting up paging alerts.

If `pagingEnabled` is true, alarms will send notifications to the provided `pageEmailAddresses`.

#### Initializer <a name="Initializer" id="@devkit-io/constructs.PagingOptions.Initializer"></a>

```typescript
import { PagingOptions } from '@devkit-io/constructs'

const pagingOptions: PagingOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@devkit-io/constructs.PagingOptions.property.pageEmailAddresses">pageEmailAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.PagingOptions.property.pagingEnabled">pagingEnabled</a></code> | <code>boolean</code> | *No description.* |

---

##### `pageEmailAddresses`<sup>Required</sup> <a name="pageEmailAddresses" id="@devkit-io/constructs.PagingOptions.property.pageEmailAddresses"></a>

```typescript
public readonly pageEmailAddresses: string[];
```

- *Type:* string[]

---

##### `pagingEnabled`<sup>Required</sup> <a name="pagingEnabled" id="@devkit-io/constructs.PagingOptions.property.pagingEnabled"></a>

```typescript
public readonly pagingEnabled: boolean;
```

- *Type:* boolean

---

### QueueWithDLQProps <a name="QueueWithDLQProps" id="@devkit-io/constructs.QueueWithDLQProps"></a>

#### Initializer <a name="Initializer" id="@devkit-io/constructs.QueueWithDLQProps.Initializer"></a>

```typescript
import { QueueWithDLQProps } from '@devkit-io/constructs'

const queueWithDLQProps: QueueWithDLQProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@devkit-io/constructs.QueueWithDLQProps.property.visibilityTimeout">visibilityTimeout</a></code> | <code>aws-cdk-lib.Duration</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.QueueWithDLQProps.property.dlqRetentionPeriod">dlqRetentionPeriod</a></code> | <code>aws-cdk-lib.Duration</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.QueueWithDLQProps.property.maxReceiveCount">maxReceiveCount</a></code> | <code>number</code> | *No description.* |

---

##### `visibilityTimeout`<sup>Required</sup> <a name="visibilityTimeout" id="@devkit-io/constructs.QueueWithDLQProps.property.visibilityTimeout"></a>

```typescript
public readonly visibilityTimeout: Duration;
```

- *Type:* aws-cdk-lib.Duration

---

##### `dlqRetentionPeriod`<sup>Optional</sup> <a name="dlqRetentionPeriod" id="@devkit-io/constructs.QueueWithDLQProps.property.dlqRetentionPeriod"></a>

```typescript
public readonly dlqRetentionPeriod: Duration;
```

- *Type:* aws-cdk-lib.Duration

---

##### `maxReceiveCount`<sup>Optional</sup> <a name="maxReceiveCount" id="@devkit-io/constructs.QueueWithDLQProps.property.maxReceiveCount"></a>

```typescript
public readonly maxReceiveCount: number;
```

- *Type:* number

---

### S3CloudfrontAssetDistributionProps <a name="S3CloudfrontAssetDistributionProps" id="@devkit-io/constructs.S3CloudfrontAssetDistributionProps"></a>

#### Initializer <a name="Initializer" id="@devkit-io/constructs.S3CloudfrontAssetDistributionProps.Initializer"></a>

```typescript
import { S3CloudfrontAssetDistributionProps } from '@devkit-io/constructs'

const s3CloudfrontAssetDistributionProps: S3CloudfrontAssetDistributionProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@devkit-io/constructs.S3CloudfrontAssetDistributionProps.property.certificateArn">certificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.S3CloudfrontAssetDistributionProps.property.domainNames">domainNames</a></code> | <code>string[]</code> | *No description.* |

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="@devkit-io/constructs.S3CloudfrontAssetDistributionProps.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

---

##### `domainNames`<sup>Optional</sup> <a name="domainNames" id="@devkit-io/constructs.S3CloudfrontAssetDistributionProps.property.domainNames"></a>

```typescript
public readonly domainNames: string[];
```

- *Type:* string[]

---

### S3EventLambdaProps <a name="S3EventLambdaProps" id="@devkit-io/constructs.S3EventLambdaProps"></a>

#### Initializer <a name="Initializer" id="@devkit-io/constructs.S3EventLambdaProps.Initializer"></a>

```typescript
import { S3EventLambdaProps } from '@devkit-io/constructs'

const s3EventLambdaProps: S3EventLambdaProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@devkit-io/constructs.S3EventLambdaProps.property.bucket">bucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.S3EventLambdaProps.property.codePath">codePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.S3EventLambdaProps.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.S3EventLambdaProps.property.eventTypeNotifications">eventTypeNotifications</a></code> | <code>aws-cdk-lib.aws_s3.EventType[]</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.S3EventLambdaProps.property.handler">handler</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.S3EventLambdaProps.property.lambdaFunction">lambdaFunction</a></code> | <code>aws-cdk-lib.aws_lambda.Function</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.S3EventLambdaProps.property.memorySize">memorySize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.S3EventLambdaProps.property.runtime">runtime</a></code> | <code>aws-cdk-lib.aws_lambda.Runtime</code> | *No description.* |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@devkit-io/constructs.S3EventLambdaProps.property.bucket"></a>

```typescript
public readonly bucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

---

##### `codePath`<sup>Optional</sup> <a name="codePath" id="@devkit-io/constructs.S3EventLambdaProps.property.codePath"></a>

```typescript
public readonly codePath: string;
```

- *Type:* string

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@devkit-io/constructs.S3EventLambdaProps.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `eventTypeNotifications`<sup>Optional</sup> <a name="eventTypeNotifications" id="@devkit-io/constructs.S3EventLambdaProps.property.eventTypeNotifications"></a>

```typescript
public readonly eventTypeNotifications: EventType[];
```

- *Type:* aws-cdk-lib.aws_s3.EventType[]

---

##### `handler`<sup>Optional</sup> <a name="handler" id="@devkit-io/constructs.S3EventLambdaProps.property.handler"></a>

```typescript
public readonly handler: string;
```

- *Type:* string

---

##### `lambdaFunction`<sup>Optional</sup> <a name="lambdaFunction" id="@devkit-io/constructs.S3EventLambdaProps.property.lambdaFunction"></a>

```typescript
public readonly lambdaFunction: Function;
```

- *Type:* aws-cdk-lib.aws_lambda.Function

---

##### `memorySize`<sup>Optional</sup> <a name="memorySize" id="@devkit-io/constructs.S3EventLambdaProps.property.memorySize"></a>

```typescript
public readonly memorySize: number;
```

- *Type:* number

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@devkit-io/constructs.S3EventLambdaProps.property.runtime"></a>

```typescript
public readonly runtime: Runtime;
```

- *Type:* aws-cdk-lib.aws_lambda.Runtime

---

### ScheduledLambdaProps <a name="ScheduledLambdaProps" id="@devkit-io/constructs.ScheduledLambdaProps"></a>

#### Initializer <a name="Initializer" id="@devkit-io/constructs.ScheduledLambdaProps.Initializer"></a>

```typescript
import { ScheduledLambdaProps } from '@devkit-io/constructs'

const scheduledLambdaProps: ScheduledLambdaProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@devkit-io/constructs.ScheduledLambdaProps.property.scheduleExpression">scheduleExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.ScheduledLambdaProps.property.codePath">codePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.ScheduledLambdaProps.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.ScheduledLambdaProps.property.handler">handler</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.ScheduledLambdaProps.property.lambdaFunction">lambdaFunction</a></code> | <code>aws-cdk-lib.aws_lambda.Function</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.ScheduledLambdaProps.property.runtime">runtime</a></code> | <code>aws-cdk-lib.aws_lambda.Runtime</code> | *No description.* |

---

##### `scheduleExpression`<sup>Required</sup> <a name="scheduleExpression" id="@devkit-io/constructs.ScheduledLambdaProps.property.scheduleExpression"></a>

```typescript
public readonly scheduleExpression: string;
```

- *Type:* string

---

##### `codePath`<sup>Optional</sup> <a name="codePath" id="@devkit-io/constructs.ScheduledLambdaProps.property.codePath"></a>

```typescript
public readonly codePath: string;
```

- *Type:* string

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@devkit-io/constructs.ScheduledLambdaProps.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `handler`<sup>Optional</sup> <a name="handler" id="@devkit-io/constructs.ScheduledLambdaProps.property.handler"></a>

```typescript
public readonly handler: string;
```

- *Type:* string

---

##### `lambdaFunction`<sup>Optional</sup> <a name="lambdaFunction" id="@devkit-io/constructs.ScheduledLambdaProps.property.lambdaFunction"></a>

```typescript
public readonly lambdaFunction: Function;
```

- *Type:* aws-cdk-lib.aws_lambda.Function

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@devkit-io/constructs.ScheduledLambdaProps.property.runtime"></a>

```typescript
public readonly runtime: Runtime;
```

- *Type:* aws-cdk-lib.aws_lambda.Runtime

---

### SelfMutatingPipelineProps <a name="SelfMutatingPipelineProps" id="@devkit-io/constructs.SelfMutatingPipelineProps"></a>

#### Initializer <a name="Initializer" id="@devkit-io/constructs.SelfMutatingPipelineProps.Initializer"></a>

```typescript
import { SelfMutatingPipelineProps } from '@devkit-io/constructs'

const selfMutatingPipelineProps: SelfMutatingPipelineProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@devkit-io/constructs.SelfMutatingPipelineProps.property.buildCommands">buildCommands</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.SelfMutatingPipelineProps.property.repositoryName">repositoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.SelfMutatingPipelineProps.property.sourceConnectionArn">sourceConnectionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.SelfMutatingPipelineProps.property.stages">stages</a></code> | <code>aws-cdk-lib.Stage[]</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.SelfMutatingPipelineProps.property.additionalPolicies">additionalPolicies</a></code> | <code>aws-cdk-lib.aws_iam.PolicyStatement[]</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.SelfMutatingPipelineProps.property.artifactBucket">artifactBucket</a></code> | <code>aws-cdk-lib.aws_s3.Bucket</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.SelfMutatingPipelineProps.property.branchName">branchName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.SelfMutatingPipelineProps.property.buildImage">buildImage</a></code> | <code>aws-cdk-lib.aws_codebuild.IBuildImage</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.SelfMutatingPipelineProps.property.buildTimeout">buildTimeout</a></code> | <code>aws-cdk-lib.Duration</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.SelfMutatingPipelineProps.property.cacheBucket">cacheBucket</a></code> | <code>aws-cdk-lib.aws_s3.Bucket</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.SelfMutatingPipelineProps.property.codeBuildComputeType">codeBuildComputeType</a></code> | <code>aws-cdk-lib.aws_codebuild.ComputeType</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.SelfMutatingPipelineProps.property.customRole">customRole</a></code> | <code>aws-cdk-lib.aws_iam.Role</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.SelfMutatingPipelineProps.property.environmentVariables">environmentVariables</a></code> | <code><a href="#@devkit-io/constructs.EnvironmentVariable">EnvironmentVariable</a>[]</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.SelfMutatingPipelineProps.property.notificationsTopic">notificationsTopic</a></code> | <code>aws-cdk-lib.aws_sns.ITopic</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.SelfMutatingPipelineProps.property.synthOutputDirectory">synthOutputDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.SelfMutatingPipelineProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |

---

##### `buildCommands`<sup>Required</sup> <a name="buildCommands" id="@devkit-io/constructs.SelfMutatingPipelineProps.property.buildCommands"></a>

```typescript
public readonly buildCommands: string[];
```

- *Type:* string[]

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@devkit-io/constructs.SelfMutatingPipelineProps.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

---

##### `sourceConnectionArn`<sup>Required</sup> <a name="sourceConnectionArn" id="@devkit-io/constructs.SelfMutatingPipelineProps.property.sourceConnectionArn"></a>

```typescript
public readonly sourceConnectionArn: string;
```

- *Type:* string

---

##### `stages`<sup>Required</sup> <a name="stages" id="@devkit-io/constructs.SelfMutatingPipelineProps.property.stages"></a>

```typescript
public readonly stages: Stage[];
```

- *Type:* aws-cdk-lib.Stage[]

---

##### `additionalPolicies`<sup>Optional</sup> <a name="additionalPolicies" id="@devkit-io/constructs.SelfMutatingPipelineProps.property.additionalPolicies"></a>

```typescript
public readonly additionalPolicies: PolicyStatement[];
```

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement[]

---

##### `artifactBucket`<sup>Optional</sup> <a name="artifactBucket" id="@devkit-io/constructs.SelfMutatingPipelineProps.property.artifactBucket"></a>

```typescript
public readonly artifactBucket: Bucket;
```

- *Type:* aws-cdk-lib.aws_s3.Bucket

---

##### `branchName`<sup>Optional</sup> <a name="branchName" id="@devkit-io/constructs.SelfMutatingPipelineProps.property.branchName"></a>

```typescript
public readonly branchName: string;
```

- *Type:* string

---

##### `buildImage`<sup>Optional</sup> <a name="buildImage" id="@devkit-io/constructs.SelfMutatingPipelineProps.property.buildImage"></a>

```typescript
public readonly buildImage: IBuildImage;
```

- *Type:* aws-cdk-lib.aws_codebuild.IBuildImage

---

##### `buildTimeout`<sup>Optional</sup> <a name="buildTimeout" id="@devkit-io/constructs.SelfMutatingPipelineProps.property.buildTimeout"></a>

```typescript
public readonly buildTimeout: Duration;
```

- *Type:* aws-cdk-lib.Duration

---

##### `cacheBucket`<sup>Optional</sup> <a name="cacheBucket" id="@devkit-io/constructs.SelfMutatingPipelineProps.property.cacheBucket"></a>

```typescript
public readonly cacheBucket: Bucket;
```

- *Type:* aws-cdk-lib.aws_s3.Bucket

---

##### `codeBuildComputeType`<sup>Optional</sup> <a name="codeBuildComputeType" id="@devkit-io/constructs.SelfMutatingPipelineProps.property.codeBuildComputeType"></a>

```typescript
public readonly codeBuildComputeType: ComputeType;
```

- *Type:* aws-cdk-lib.aws_codebuild.ComputeType

---

##### `customRole`<sup>Optional</sup> <a name="customRole" id="@devkit-io/constructs.SelfMutatingPipelineProps.property.customRole"></a>

```typescript
public readonly customRole: Role;
```

- *Type:* aws-cdk-lib.aws_iam.Role

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="@devkit-io/constructs.SelfMutatingPipelineProps.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: EnvironmentVariable[];
```

- *Type:* <a href="#@devkit-io/constructs.EnvironmentVariable">EnvironmentVariable</a>[]

---

##### `notificationsTopic`<sup>Optional</sup> <a name="notificationsTopic" id="@devkit-io/constructs.SelfMutatingPipelineProps.property.notificationsTopic"></a>

```typescript
public readonly notificationsTopic: ITopic;
```

- *Type:* aws-cdk-lib.aws_sns.ITopic

---

##### `synthOutputDirectory`<sup>Optional</sup> <a name="synthOutputDirectory" id="@devkit-io/constructs.SelfMutatingPipelineProps.property.synthOutputDirectory"></a>

```typescript
public readonly synthOutputDirectory: string;
```

- *Type:* string

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@devkit-io/constructs.SelfMutatingPipelineProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---

### ServiceConfiguration <a name="ServiceConfiguration" id="@devkit-io/constructs.ServiceConfiguration"></a>

#### Initializer <a name="Initializer" id="@devkit-io/constructs.ServiceConfiguration.Initializer"></a>

```typescript
import { ServiceConfiguration } from '@devkit-io/constructs'

const serviceConfiguration: ServiceConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@devkit-io/constructs.ServiceConfiguration.property.desiredCount">desiredCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.ServiceConfiguration.property.healthCheckPath">healthCheckPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.ServiceConfiguration.property.memoryLimit">memoryLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.ServiceConfiguration.property.serviceImage">serviceImage</a></code> | <code>aws-cdk-lib.aws_ecr_assets.DockerImageAsset</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.ServiceConfiguration.property.servicePort">servicePort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.ServiceConfiguration.property.circuitBreakerEnabled">circuitBreakerEnabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.ServiceConfiguration.property.ebsVolumeConfiguration">ebsVolumeConfiguration</a></code> | <code><a href="#@devkit-io/constructs.EbsVolumeConfiguration">EbsVolumeConfiguration</a></code> | *No description.* |
| <code><a href="#@devkit-io/constructs.ServiceConfiguration.property.logRetentionDays">logRetentionDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.ServiceConfiguration.property.maxHealthyPercent">maxHealthyPercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.ServiceConfiguration.property.minHealthyPercent">minHealthyPercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.ServiceConfiguration.property.serviceContainerEnvVars">serviceContainerEnvVars</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.ServiceConfiguration.property.serviceContainerSecrets">serviceContainerSecrets</a></code> | <code>{[ key: string ]: aws-cdk-lib.aws_ecs.Secret}</code> | *No description.* |

---

##### `desiredCount`<sup>Required</sup> <a name="desiredCount" id="@devkit-io/constructs.ServiceConfiguration.property.desiredCount"></a>

```typescript
public readonly desiredCount: number;
```

- *Type:* number

---

##### `healthCheckPath`<sup>Required</sup> <a name="healthCheckPath" id="@devkit-io/constructs.ServiceConfiguration.property.healthCheckPath"></a>

```typescript
public readonly healthCheckPath: string;
```

- *Type:* string

---

##### `memoryLimit`<sup>Required</sup> <a name="memoryLimit" id="@devkit-io/constructs.ServiceConfiguration.property.memoryLimit"></a>

```typescript
public readonly memoryLimit: number;
```

- *Type:* number

---

##### `serviceImage`<sup>Required</sup> <a name="serviceImage" id="@devkit-io/constructs.ServiceConfiguration.property.serviceImage"></a>

```typescript
public readonly serviceImage: DockerImageAsset;
```

- *Type:* aws-cdk-lib.aws_ecr_assets.DockerImageAsset

---

##### `servicePort`<sup>Required</sup> <a name="servicePort" id="@devkit-io/constructs.ServiceConfiguration.property.servicePort"></a>

```typescript
public readonly servicePort: number;
```

- *Type:* number

---

##### `circuitBreakerEnabled`<sup>Optional</sup> <a name="circuitBreakerEnabled" id="@devkit-io/constructs.ServiceConfiguration.property.circuitBreakerEnabled"></a>

```typescript
public readonly circuitBreakerEnabled: boolean;
```

- *Type:* boolean

---

##### `ebsVolumeConfiguration`<sup>Optional</sup> <a name="ebsVolumeConfiguration" id="@devkit-io/constructs.ServiceConfiguration.property.ebsVolumeConfiguration"></a>

```typescript
public readonly ebsVolumeConfiguration: EbsVolumeConfiguration;
```

- *Type:* <a href="#@devkit-io/constructs.EbsVolumeConfiguration">EbsVolumeConfiguration</a>

---

##### `logRetentionDays`<sup>Optional</sup> <a name="logRetentionDays" id="@devkit-io/constructs.ServiceConfiguration.property.logRetentionDays"></a>

```typescript
public readonly logRetentionDays: number;
```

- *Type:* number

---

##### `maxHealthyPercent`<sup>Optional</sup> <a name="maxHealthyPercent" id="@devkit-io/constructs.ServiceConfiguration.property.maxHealthyPercent"></a>

```typescript
public readonly maxHealthyPercent: number;
```

- *Type:* number

---

##### `minHealthyPercent`<sup>Optional</sup> <a name="minHealthyPercent" id="@devkit-io/constructs.ServiceConfiguration.property.minHealthyPercent"></a>

```typescript
public readonly minHealthyPercent: number;
```

- *Type:* number

---

##### `serviceContainerEnvVars`<sup>Optional</sup> <a name="serviceContainerEnvVars" id="@devkit-io/constructs.ServiceConfiguration.property.serviceContainerEnvVars"></a>

```typescript
public readonly serviceContainerEnvVars: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `serviceContainerSecrets`<sup>Optional</sup> <a name="serviceContainerSecrets" id="@devkit-io/constructs.ServiceConfiguration.property.serviceContainerSecrets"></a>

```typescript
public readonly serviceContainerSecrets: {[ key: string ]: Secret};
```

- *Type:* {[ key: string ]: aws-cdk-lib.aws_ecs.Secret}

---

### StaticSiteProps <a name="StaticSiteProps" id="@devkit-io/constructs.StaticSiteProps"></a>

#### Initializer <a name="Initializer" id="@devkit-io/constructs.StaticSiteProps.Initializer"></a>

```typescript
import { StaticSiteProps } from '@devkit-io/constructs'

const staticSiteProps: StaticSiteProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@devkit-io/constructs.StaticSiteProps.property.sourceAsset">sourceAsset</a></code> | <code>aws-cdk-lib.aws_s3_deployment.ISource</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.StaticSiteProps.property.certificateArn">certificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.StaticSiteProps.property.domainNames">domainNames</a></code> | <code>string[]</code> | *No description.* |

---

##### `sourceAsset`<sup>Required</sup> <a name="sourceAsset" id="@devkit-io/constructs.StaticSiteProps.property.sourceAsset"></a>

```typescript
public readonly sourceAsset: ISource;
```

- *Type:* aws-cdk-lib.aws_s3_deployment.ISource

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="@devkit-io/constructs.StaticSiteProps.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

---

##### `domainNames`<sup>Optional</sup> <a name="domainNames" id="@devkit-io/constructs.StaticSiteProps.property.domainNames"></a>

```typescript
public readonly domainNames: string[];
```

- *Type:* string[]

---

### TaskHandlingProps <a name="TaskHandlingProps" id="@devkit-io/constructs.TaskHandlingProps"></a>

#### Initializer <a name="Initializer" id="@devkit-io/constructs.TaskHandlingProps.Initializer"></a>

```typescript
import { TaskHandlingProps } from '@devkit-io/constructs'

const taskHandlingProps: TaskHandlingProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@devkit-io/constructs.TaskHandlingProps.property.lambdaProps">lambdaProps</a></code> | <code><a href="#@devkit-io/constructs.MonitoredNodeLambdaProps">MonitoredNodeLambdaProps</a></code> | *No description.* |
| <code><a href="#@devkit-io/constructs.TaskHandlingProps.property.queue">queue</a></code> | <code>aws-cdk-lib.aws_sqs.IQueue</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.TaskHandlingProps.property.queueProps">queueProps</a></code> | <code><a href="#@devkit-io/constructs.QueueWithDLQProps">QueueWithDLQProps</a></code> | *No description.* |
| <code><a href="#@devkit-io/constructs.TaskHandlingProps.property.table">table</a></code> | <code>aws-cdk-lib.aws_dynamodb.ITable</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.TaskHandlingProps.property.tableRemovalPolicy">tableRemovalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | *No description.* |
| <code><a href="#@devkit-io/constructs.TaskHandlingProps.property.taskHandler">taskHandler</a></code> | <code>aws-cdk-lib.aws_lambda.IFunction</code> | *No description.* |

---

##### `lambdaProps`<sup>Optional</sup> <a name="lambdaProps" id="@devkit-io/constructs.TaskHandlingProps.property.lambdaProps"></a>

```typescript
public readonly lambdaProps: MonitoredNodeLambdaProps;
```

- *Type:* <a href="#@devkit-io/constructs.MonitoredNodeLambdaProps">MonitoredNodeLambdaProps</a>

---

##### `queue`<sup>Optional</sup> <a name="queue" id="@devkit-io/constructs.TaskHandlingProps.property.queue"></a>

```typescript
public readonly queue: IQueue;
```

- *Type:* aws-cdk-lib.aws_sqs.IQueue

---

##### `queueProps`<sup>Optional</sup> <a name="queueProps" id="@devkit-io/constructs.TaskHandlingProps.property.queueProps"></a>

```typescript
public readonly queueProps: QueueWithDLQProps;
```

- *Type:* <a href="#@devkit-io/constructs.QueueWithDLQProps">QueueWithDLQProps</a>

---

##### `table`<sup>Optional</sup> <a name="table" id="@devkit-io/constructs.TaskHandlingProps.property.table"></a>

```typescript
public readonly table: ITable;
```

- *Type:* aws-cdk-lib.aws_dynamodb.ITable

---

##### `tableRemovalPolicy`<sup>Optional</sup> <a name="tableRemovalPolicy" id="@devkit-io/constructs.TaskHandlingProps.property.tableRemovalPolicy"></a>

```typescript
public readonly tableRemovalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `taskHandler`<sup>Optional</sup> <a name="taskHandler" id="@devkit-io/constructs.TaskHandlingProps.property.taskHandler"></a>

```typescript
public readonly taskHandler: IFunction;
```

- *Type:* aws-cdk-lib.aws_lambda.IFunction

---



