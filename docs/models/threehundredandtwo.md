# ThreeHundredAndTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTwo } from "@vercel/sdk/models/usereventpayloadprivatelinkendpoint.js";

let value: ThreeHundredAndTwo = {
  elasticConcurrencyEnabled: false,
  oldElasticConcurrencyEnabled: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `buildQueueConfiguration`                                                    | [models.BuildQueueConfiguration](../models/buildqueueconfiguration.md)       | :heavy_minus_sign:                                                           | N/A                                                                          |
| `elasticConcurrencyEnabled`                                                  | *boolean*                                                                    | :heavy_check_mark:                                                           | N/A                                                                          |
| `oldBuildQueueConfiguration`                                                 | [models.OldBuildQueueConfiguration](../models/oldbuildqueueconfiguration.md) | :heavy_minus_sign:                                                           | N/A                                                                          |
| `oldElasticConcurrencyEnabled`                                               | *boolean*                                                                    | :heavy_check_mark:                                                           | N/A                                                                          |
| `projectId`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `projectName`                                                                | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |