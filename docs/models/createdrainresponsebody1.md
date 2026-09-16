# CreateDrainResponseBody1

## Example Usage

```typescript
import { CreateDrainResponseBody1 } from "@vercel/sdk/models/createdrainop.js";

let value: CreateDrainResponseBody1 = {
  createdAt: 9104.12,
  delivery: {
    encoding: "ndjson",
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
  updatedAt: 4140.09,
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `createdAt`                                                                        | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `delivery`                                                                         | *models.ResponseBodyDelivery*                                                      | :heavy_check_mark:                                                                 | N/A                                                                                |
| `disabledAt`                                                                       | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `disabledBy`                                                                       | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `disabledReason`                                                                   | [models.DisabledReason](../models/disabledreason.md)                               | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `firstErrorTimestamp`                                                              | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `id`                                                                               | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `name`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `ownerId`                                                                          | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `projectIds`                                                                       | *string*[]                                                                         | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `sampling`                                                                         | [models.ResponseBodySampling](../models/responsebodysampling.md)[]                 | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `schemas`                                                                          | [models.ResponseBodySchemas](../models/responsebodyschemas.md)                     | :heavy_check_mark:                                                                 | N/A                                                                                |
| `source`                                                                           | *models.CreateDrainResponseBodySource*                                             | :heavy_check_mark:                                                                 | N/A                                                                                |
| `status`                                                                           | [models.CreateDrainResponseBodyStatus](../models/createdrainresponsebodystatus.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `teamId`                                                                           | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `updatedAt`                                                                        | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `filterV2`                                                                         | [models.FilterV2](../models/filterv2.md)                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |