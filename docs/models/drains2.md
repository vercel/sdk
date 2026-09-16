# Drains2

## Example Usage

```typescript
import { Drains2 } from "@vercel/sdk/models/getdrainsop.js";

let value: Drains2 = {
  createdAt: 7356.26,
  delivery: {
    compression: "none",
    encoding: "json",
    endpoint: "<value>",
    fileStructure: "hive",
    region: "<value>",
    roleArn: "<value>",
    type: "s3",
  },
  id: "<id>",
  name: "<value>",
  ownerId: "<id>",
  schemas: {},
  source: {
    kind: "self-served",
  },
  updatedAt: 9263.98,
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `createdAt`                                                                        | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `delivery`                                                                         | *models.GetDrainsDrainsDelivery*                                                   | :heavy_check_mark:                                                                 | N/A                                                                                |
| `disabledAt`                                                                       | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `disabledBy`                                                                       | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `disabledReason`                                                                   | [models.GetDrainsDrainsDisabledReason](../models/getdrainsdrainsdisabledreason.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `firstErrorTimestamp`                                                              | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `id`                                                                               | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `name`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `ownerId`                                                                          | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `projectIds`                                                                       | *string*[]                                                                         | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `sampling`                                                                         | [models.GetDrainsDrainsSampling](../models/getdrainsdrainssampling.md)[]           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `schemas`                                                                          | [models.GetDrainsDrainsSchemas](../models/getdrainsdrainsschemas.md)               | :heavy_check_mark:                                                                 | N/A                                                                                |
| `source`                                                                           | *models.GetDrainsDrainsSource*                                                     | :heavy_check_mark:                                                                 | N/A                                                                                |
| `status`                                                                           | [models.GetDrainsDrainsStatus](../models/getdrainsdrainsstatus.md)                 | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `teamId`                                                                           | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `updatedAt`                                                                        | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `filterV2`                                                                         | [models.GetDrainsDrainsFilterV2](../models/getdrainsdrainsfilterv2.md)             | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `integrationConfigurationUri`                                                      | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `integrationIcon`                                                                  | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `integrationWebsite`                                                               | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `projectAccess`                                                                    | *models.DrainsProjectAccess*                                                       | :heavy_minus_sign:                                                                 | N/A                                                                                |