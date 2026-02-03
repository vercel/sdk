# ResponseBodyBuildMachine

Build resource configuration snapshot for this deployment.

## Example Usage

```typescript
import { ResponseBodyBuildMachine } from "@vercel/sdk/models/getdeploymentop.js";

let value: ResponseBodyBuildMachine = {};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `default`                                                                | [models.ResponseBodyDefault](../models/responsebodydefault.md)           | :heavy_minus_sign:                                                       | Build resource configuration snapshot for this deployment.               |
| `purchaseType`                                                           | [models.ResponseBodyPurchaseType](../models/responsebodypurchasetype.md) | :heavy_minus_sign:                                                       | Build resource configuration snapshot for this deployment.               |
| `isDefaultBuildMachine`                                                  | *boolean*                                                                | :heavy_minus_sign:                                                       | Build resource configuration snapshot for this deployment.               |
| `cores`                                                                  | *number*                                                                 | :heavy_minus_sign:                                                       | Build resource configuration snapshot for this deployment.               |
| `memory`                                                                 | *number*                                                                 | :heavy_minus_sign:                                                       | Build resource configuration snapshot for this deployment.               |