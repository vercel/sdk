# ResponseBodyBuildMachine

## Example Usage

```typescript
import { ResponseBodyBuildMachine } from "@vercel/sdk/models/getdeploymentop.js";

let value: ResponseBodyBuildMachine = {};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `purchaseType`                                                           | [models.ResponseBodyPurchaseType](../models/responsebodypurchasetype.md) | :heavy_minus_sign:                                                       | Machine type that was used for the build.                                |
| `isDefaultBuildMachine`                                                  | *boolean*                                                                | :heavy_minus_sign:                                                       | Whether the build machine is the default build machine.                  |