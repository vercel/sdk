# Drains1

## Example Usage

```typescript
import { Drains1 } from "@vercel/sdk/models/getdrainsop.js";

let value: Drains1 = {
  id: "<id>",
  ownerId: "<id>",
  name: "<value>",
  createdAt: 9071.91,
  updatedAt: 1734.08,
  source: {
    kind: "self-served",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `id`                                                             | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `ownerId`                                                        | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `name`                                                           | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `createdAt`                                                      | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `createdFrom`                                                    | [models.DrainsCreatedFrom](../models/drainscreatedfrom.md)       | :heavy_minus_sign:                                               | N/A                                                              |
| `updatedAt`                                                      | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `projectIds`                                                     | *string*[]                                                       | :heavy_minus_sign:                                               | N/A                                                              |
| `schemas`                                                        | [models.DrainsSchemas](../models/drainsschemas.md)               | :heavy_minus_sign:                                               | N/A                                                              |
| `delivery`                                                       | *models.DrainsDelivery*                                          | :heavy_minus_sign:                                               | N/A                                                              |
| `sampling`                                                       | [models.DrainsSampling](../models/drainssampling.md)[]           | :heavy_minus_sign:                                               | N/A                                                              |
| `teamId`                                                         | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `status`                                                         | [models.DrainsStatus](../models/drainsstatus.md)                 | :heavy_minus_sign:                                               | N/A                                                              |
| `disabledAt`                                                     | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `disabledReason`                                                 | [models.DrainsDisabledReason](../models/drainsdisabledreason.md) | :heavy_minus_sign:                                               | N/A                                                              |
| `disabledBy`                                                     | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `firstErrorTimestamp`                                            | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `configurationId`                                                | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `clientId`                                                       | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `source`                                                         | *models.DrainsSource*                                            | :heavy_check_mark:                                               | N/A                                                              |
| `filter`                                                         | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `filterV2`                                                       | *models.DrainsFilterV2*                                          | :heavy_minus_sign:                                               | N/A                                                              |