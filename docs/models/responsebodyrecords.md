# ResponseBodyRecords

## Example Usage

```typescript
import { ResponseBodyRecords } from "@vercel/sdk/models/getrecordsop.js";

let value: ResponseBodyRecords = {
  created: 6411.99,
  createdAt: null,
  creator: "<value>",
  id: "<id>",
  name: "<value>",
  slug: "<value>",
  type: "AAAA",
  updated: 7087.61,
  updatedAt: 2145.38,
  value: "<value>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `comment`                                                                          | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `created`                                                                          | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `createdAt`                                                                        | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `creator`                                                                          | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `id`                                                                               | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `mxPriority`                                                                       | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `name`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `priority`                                                                         | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `slug`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `ttl`                                                                              | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `type`                                                                             | [models.GetRecordsResponseBodyDnsType](../models/getrecordsresponsebodydnstype.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `updated`                                                                          | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `updatedAt`                                                                        | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `value`                                                                            | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |