# CreateDeploymentBuildMachine

## Example Usage

```typescript
import { CreateDeploymentBuildMachine } from "@vercel/sdk/models/createdeploymentop.js";

let value: CreateDeploymentBuildMachine = {};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `purchaseType`                                                                   | [models.CreateDeploymentPurchaseType](../models/createdeploymentpurchasetype.md) | :heavy_minus_sign:                                                               | Machine type that was used for the build.                                        |
| `isDefaultBuildMachine`                                                          | *boolean*                                                                        | :heavy_minus_sign:                                                               | Whether the build machine is the default build machine.                          |