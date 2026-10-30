# TwoHundredAndNinetyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndNinetyTwo } from "@vercel/sdk/models/usereventpayload261origin.js";

let value: TwoHundredAndNinetyTwo = {
  elasticConcurrencyEnabled: true,
  oldElasticConcurrencyEnabled: false,
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