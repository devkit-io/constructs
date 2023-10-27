# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

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


## Structs <a name="Structs" id="Structs"></a>

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



