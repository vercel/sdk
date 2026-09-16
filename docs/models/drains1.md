# Drains1

## Example Usage

```typescript
import { Drains1 } from "@vercel/sdk/models/getdrainsop.js";

let value: Drains1 = {
  createdAt: 9071.91,
  delivery: {
    encoding: "json",
    endpoint: "<value>",
    headers: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    type: "http",
  },
  id: "<id>",
  name: "<value>",
  ownerId: "<id>",
  schemas: {},
  source: {
    kind: "self-served",
  },
  updatedAt: 9088.92,
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `createdAt`                                                      | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `delivery`                                                       | *models.DrainsDelivery*                                          | :heavy_check_mark:                                               | N/A                                                              |
| `disabledAt`                                                     | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `disabledBy`                                                     | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `disabledReason`                                                 | [models.DrainsDisabledReason](../models/drainsdisabledreason.md) | :heavy_minus_sign:                                               | N/A                                                              |
| `firstErrorTimestamp`                                            | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `id`                                                             | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `name`                                                           | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `ownerId`                                                        | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `projectIds`                                                     | *string*[]                                                       | :heavy_minus_sign:                                               | N/A                                                              |
| `sampling`                                                       | [models.DrainsSampling](../models/drainssampling.md)[]           | :heavy_minus_sign:                                               | N/A                                                              |
| `schemas`                                                        | [models.DrainsSchemas](../models/drainsschemas.md)               | :heavy_check_mark:                                               | N/A                                                              |
| `source`                                                         | *models.DrainsSource*                                            | :heavy_check_mark:                                               | N/A                                                              |
| `status`                                                         | [models.DrainsStatus](../models/drainsstatus.md)                 | :heavy_minus_sign:                                               | N/A                                                              |
| `teamId`                                                         | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `updatedAt`                                                      | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `filterV2`                                                       | [models.DrainsFilterV2](../models/drainsfilterv2.md)             | :heavy_minus_sign:                                               | N/A                                                              |