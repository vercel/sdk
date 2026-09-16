# CreateDrainResponseBody2

## Example Usage

```typescript
import { CreateDrainResponseBody2 } from "@vercel/sdk/models/createdrainop.js";

let value: CreateDrainResponseBody2 = {
  createdAt: 8513.2,
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
  updatedAt: 6072.17,
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                    | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `delivery`                                                                                     | *models.CreateDrainResponseBodyDelivery*                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `disabledAt`                                                                                   | *number*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `disabledBy`                                                                                   | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `disabledReason`                                                                               | [models.ResponseBodyDisabledReason](../models/responsebodydisabledreason.md)                   | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `firstErrorTimestamp`                                                                          | *number*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `name`                                                                                         | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `ownerId`                                                                                      | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `projectIds`                                                                                   | *string*[]                                                                                     | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `sampling`                                                                                     | [models.CreateDrainResponseBodySampling](../models/createdrainresponsebodysampling.md)[]       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `schemas`                                                                                      | [models.CreateDrainResponseBodySchemas](../models/createdrainresponsebodyschemas.md)           | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `source`                                                                                       | *models.CreateDrainResponseBodyDrainsSource*                                                   | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `status`                                                                                       | [models.CreateDrainResponseBodyDrainsStatus](../models/createdrainresponsebodydrainsstatus.md) | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `teamId`                                                                                       | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `updatedAt`                                                                                    | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `filterV2`                                                                                     | [models.ResponseBodyFilterV2](../models/responsebodyfilterv2.md)                               | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `integrationConfigurationUri`                                                                  | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `integrationIcon`                                                                              | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `integrationWebsite`                                                                           | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `projectAccess`                                                                                | *models.ProjectAccess*                                                                         | :heavy_minus_sign:                                                                             | N/A                                                                                            |