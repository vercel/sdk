# UpdateDrainResponseBody2

## Example Usage

```typescript
import { UpdateDrainResponseBody2 } from "@vercel/sdk/models/updatedrainop.js";

let value: UpdateDrainResponseBody2 = {
  createdAt: 7836.46,
  delivery: {
    encoding: "proto",
    endpoint: {
      traces: "<value>",
    },
    headers: {
      "key": "<value>",
      "key1": "<value>",
    },
    type: "otlphttp",
  },
  id: "<id>",
  name: "<value>",
  ownerId: "<id>",
  schemas: {},
  source: {
    kind: "self-served",
  },
  updatedAt: 7610.88,
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                    | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `delivery`                                                                                                     | *models.UpdateDrainResponseBodyDrainsDelivery*                                                                 | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `disabledAt`                                                                                                   | *number*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `disabledBy`                                                                                                   | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `disabledReason`                                                                                               | [models.UpdateDrainResponseBodyDrainsDisabledReason](../models/updatedrainresponsebodydrainsdisabledreason.md) | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `firstErrorTimestamp`                                                                                          | *number*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `id`                                                                                                           | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `name`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `ownerId`                                                                                                      | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `projectIds`                                                                                                   | *string*[]                                                                                                     | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `sampling`                                                                                                     | [models.UpdateDrainResponseBodyDrainsSampling](../models/updatedrainresponsebodydrainssampling.md)[]           | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `schemas`                                                                                                      | [models.UpdateDrainResponseBodyDrainsSchemas](../models/updatedrainresponsebodydrainsschemas.md)               | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `source`                                                                                                       | *models.UpdateDrainResponseBodyDrainsSource*                                                                   | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `status`                                                                                                       | [models.UpdateDrainResponseBodyDrainsStatus](../models/updatedrainresponsebodydrainsstatus.md)                 | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `teamId`                                                                                                       | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `updatedAt`                                                                                                    | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `filterV2`                                                                                                     | [models.UpdateDrainResponseBodyDrainsFilterV2](../models/updatedrainresponsebodydrainsfilterv2.md)             | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `integrationConfigurationUri`                                                                                  | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `integrationIcon`                                                                                              | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `integrationWebsite`                                                                                           | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `projectAccess`                                                                                                | *models.UpdateDrainResponseBodyProjectAccess*                                                                  | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |