# Drains2

## Example Usage

```typescript
import { Drains2 } from "@vercel/sdk/models/getdrainsop.js";

let value: Drains2 = {
  id: "<id>",
  ownerId: "<id>",
  name: "<value>",
  createdAt: 7356.26,
  updatedAt: 7249.52,
  schemas: {},
  delivery: {
    type: "http",
    endpoint: "<value>",
    encoding: "json",
    headers: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
  },
  source: {
    kind: "integration",
    integrationId: "<id>",
    integrationConfigurationId: "<id>",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `id`                                                                               | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `ownerId`                                                                          | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `name`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `createdAt`                                                                        | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `updatedAt`                                                                        | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `projectIds`                                                                       | *string*[]                                                                         | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `schemas`                                                                          | [models.GetDrainsDrainsSchemas](../models/getdrainsdrainsschemas.md)               | :heavy_check_mark:                                                                 | N/A                                                                                |
| `delivery`                                                                         | *models.GetDrainsDrainsDelivery*                                                   | :heavy_check_mark:                                                                 | N/A                                                                                |
| `sampling`                                                                         | [models.GetDrainsDrainsSampling](../models/getdrainsdrainssampling.md)[]           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `teamId`                                                                           | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `status`                                                                           | [models.GetDrainsDrainsStatus](../models/getdrainsdrainsstatus.md)                 | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `disabledAt`                                                                       | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `disabledReason`                                                                   | [models.GetDrainsDrainsDisabledReason](../models/getdrainsdrainsdisabledreason.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `disabledBy`                                                                       | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `firstErrorTimestamp`                                                              | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `source`                                                                           | *models.GetDrainsDrainsSource*                                                     | :heavy_check_mark:                                                                 | N/A                                                                                |
| `filter`                                                                           | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `filterV2`                                                                         | *models.GetDrainsDrainsFilterV2*                                                   | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `integrationIcon`                                                                  | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `integrationConfigurationUri`                                                      | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `integrationWebsite`                                                               | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `projectAccess`                                                                    | *models.DrainsProjectAccess*                                                       | :heavy_minus_sign:                                                                 | N/A                                                                                |