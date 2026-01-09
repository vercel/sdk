# UpdateDrainResponseBody1

## Example Usage

```typescript
import { UpdateDrainResponseBody1 } from "@vercel/sdk/models/updatedrainop.js";

let value: UpdateDrainResponseBody1 = {
  id: "<id>",
  createdAt: 2996.75,
  updatedAt: 9500.11,
  name: "<value>",
  ownerId: "<id>",
  schemas: {},
  delivery: {
    type: "clickhouse",
    endpoint: "<value>",
    table: "<value>",
  },
  source: {
    kind: "integration",
    integrationId: "<id>",
    integrationConfigurationId: "<id>",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `createdAt`                                                                                        | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `updatedAt`                                                                                        | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `projectIds`                                                                                       | *string*[]                                                                                         | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `name`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `teamId`                                                                                           | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `ownerId`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `status`                                                                                           | [models.UpdateDrainResponseBodyStatus](../models/updatedrainresponsebodystatus.md)                 | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `firstErrorTimestamp`                                                                              | *number*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `disabledAt`                                                                                       | *number*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `disabledBy`                                                                                       | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `disabledReason`                                                                                   | [models.UpdateDrainResponseBodyDisabledReason](../models/updatedrainresponsebodydisabledreason.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `schemas`                                                                                          | [models.UpdateDrainResponseBodySchemas](../models/updatedrainresponsebodyschemas.md)               | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `delivery`                                                                                         | *models.UpdateDrainResponseBodyDelivery*                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `sampling`                                                                                         | [models.UpdateDrainResponseBodySampling](../models/updatedrainresponsebodysampling.md)[]           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `source`                                                                                           | *models.UpdateDrainResponseBodySource*                                                             | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `filter`                                                                                           | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `filterV2`                                                                                         | *models.UpdateDrainResponseBodyFilterV2*                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |