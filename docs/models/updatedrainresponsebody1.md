# UpdateDrainResponseBody1

## Example Usage

```typescript
import { UpdateDrainResponseBody1 } from "@vercel/sdk/models/updatedrainop.js";

let value: UpdateDrainResponseBody1 = {
  createdAt: 2996.75,
  delivery: {
    target: "vercel-otel-traces-db",
    type: "internal",
  },
  id: "<id>",
  name: "<value>",
  ownerId: "<id>",
  schemas: {},
  source: {
    integrationConfigurationId: "<id>",
    integrationId: "<id>",
    kind: "integration",
  },
  updatedAt: 7692.12,
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                        | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `delivery`                                                                                         | *models.UpdateDrainResponseBodyDelivery*                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `disabledAt`                                                                                       | *number*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `disabledBy`                                                                                       | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `disabledReason`                                                                                   | [models.UpdateDrainResponseBodyDisabledReason](../models/updatedrainresponsebodydisabledreason.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `firstErrorTimestamp`                                                                              | *number*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `name`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `ownerId`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `projectIds`                                                                                       | *string*[]                                                                                         | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `sampling`                                                                                         | [models.UpdateDrainResponseBodySampling](../models/updatedrainresponsebodysampling.md)[]           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `schemas`                                                                                          | [models.UpdateDrainResponseBodySchemas](../models/updatedrainresponsebodyschemas.md)               | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `source`                                                                                           | *models.UpdateDrainResponseBodySource*                                                             | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `status`                                                                                           | [models.UpdateDrainResponseBodyStatus](../models/updatedrainresponsebodystatus.md)                 | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `teamId`                                                                                           | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `updatedAt`                                                                                        | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `filterV2`                                                                                         | [models.UpdateDrainResponseBodyFilterV2](../models/updatedrainresponsebodyfilterv2.md)             | :heavy_minus_sign:                                                                                 | N/A                                                                                                |