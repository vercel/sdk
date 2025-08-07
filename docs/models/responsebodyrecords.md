# ResponseBodyRecords

## Example Usage

```typescript
import { ResponseBodyRecords } from "@vercel/sdk/models/getrecordsop.js";

let value: ResponseBodyRecords = {
  id: "<id>",
  slug: "<value>",
  name: "<value>",
  type: "ALIAS",
  value: "<value>",
  creator: "<value>",
  created: 999.47,
  updated: 9762.61,
  createdAt: 3836.08,
  updatedAt: 9835.15,
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `id`                                                                               | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `slug`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `name`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `type`                                                                             | [models.GetRecordsResponseBodyDnsType](../models/getrecordsresponsebodydnstype.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `value`                                                                            | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `mxPriority`                                                                       | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `priority`                                                                         | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `creator`                                                                          | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `created`                                                                          | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `updated`                                                                          | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `createdAt`                                                                        | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `updatedAt`                                                                        | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `ttl`                                                                              | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `comment`                                                                          | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |