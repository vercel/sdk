# OneHundredAndFortyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFortyOne } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndFortyOne = {
  projectId: "<id>",
  projectName: "<value>",
  elasticConcurrencyEnabled: true,
  oldElasticConcurrencyEnabled: false,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `projectId`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `projectName`                                                                | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `elasticConcurrencyEnabled`                                                  | *boolean*                                                                    | :heavy_check_mark:                                                           | N/A                                                                          |
| `oldElasticConcurrencyEnabled`                                               | *boolean*                                                                    | :heavy_check_mark:                                                           | N/A                                                                          |
| `buildQueueConfiguration`                                                    | [models.BuildQueueConfiguration](../models/buildqueueconfiguration.md)       | :heavy_minus_sign:                                                           | N/A                                                                          |
| `oldBuildQueueConfiguration`                                                 | [models.OldBuildQueueConfiguration](../models/oldbuildqueueconfiguration.md) | :heavy_minus_sign:                                                           | N/A                                                                          |