# GetAllLogDrainsResponseBody

## Example Usage

```typescript
import { GetAllLogDrainsResponseBody } from "@vercel/sdk/models/getalllogdrainsop.js";

let value: GetAllLogDrainsResponseBody = {
  environments: [
    "production",
  ],
  id: "<id>",
  createdAt: 8843.25,
  deletedAt: 9585.33,
  updatedAt: 2075.12,
  url: "https://firsthand-t-shirt.com",
  name: "<value>",
  ownerId: "<id>",
  deliveryFormat: "ndjson",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `clientId`                                                                         | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `configurationId`                                                                  | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `sources`                                                                          | [models.GetAllLogDrainsSources](../models/getalllogdrainssources.md)[]             | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `environments`                                                                     | [models.GetAllLogDrainsEnvironments](../models/getalllogdrainsenvironments.md)[]   | :heavy_check_mark:                                                                 | N/A                                                                                |
| `status`                                                                           | [models.GetAllLogDrainsStatus](../models/getalllogdrainsstatus.md)                 | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `disabledAt`                                                                       | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `disabledReason`                                                                   | [models.GetAllLogDrainsDisabledReason](../models/getalllogdrainsdisabledreason.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `disabledBy`                                                                       | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `firstErrorTimestamp`                                                              | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `samplingRate`                                                                     | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `hideIpAddresses`                                                                  | *boolean*                                                                          | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `id`                                                                               | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `createdAt`                                                                        | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `deletedAt`                                                                        | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `updatedAt`                                                                        | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `url`                                                                              | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `headers`                                                                          | Record<string, *string*>                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `projectIds`                                                                       | *string*[]                                                                         | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `name`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `teamId`                                                                           | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `ownerId`                                                                          | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `createdFrom`                                                                      | [models.GetAllLogDrainsCreatedFrom](../models/getalllogdrainscreatedfrom.md)       | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `deliveryFormat`                                                                   | [models.GetAllLogDrainsDeliveryFormat](../models/getalllogdrainsdeliveryformat.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `secret`                                                                           | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |