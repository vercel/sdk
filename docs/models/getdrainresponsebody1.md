# GetDrainResponseBody1

## Example Usage

```typescript
import { GetDrainResponseBody1 } from "@vercel/sdk/models/getdrainop.js";

let value: GetDrainResponseBody1 = {
  createdAt: 5261.65,
  delivery: {
    endpoint: "<value>",
    table: "<value>",
    type: "clickhouse",
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
  updatedAt: 4761.29,
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                  | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `delivery`                                                                                   | *models.GetDrainResponseBodyDelivery*                                                        | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `disabledAt`                                                                                 | *number*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `disabledBy`                                                                                 | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `disabledReason`                                                                             | [models.GetDrainResponseBodyDisabledReason](../models/getdrainresponsebodydisabledreason.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `firstErrorTimestamp`                                                                        | *number*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `id`                                                                                         | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `name`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `ownerId`                                                                                    | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `projectIds`                                                                                 | *string*[]                                                                                   | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `sampling`                                                                                   | [models.GetDrainResponseBodySampling](../models/getdrainresponsebodysampling.md)[]           | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `schemas`                                                                                    | [models.GetDrainResponseBodySchemas](../models/getdrainresponsebodyschemas.md)               | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `source`                                                                                     | *models.GetDrainResponseBodySource*                                                          | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `status`                                                                                     | [models.GetDrainResponseBodyStatus](../models/getdrainresponsebodystatus.md)                 | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `teamId`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `updatedAt`                                                                                  | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `filterV2`                                                                                   | [models.GetDrainResponseBodyFilterV2](../models/getdrainresponsebodyfilterv2.md)             | :heavy_minus_sign:                                                                           | N/A                                                                                          |