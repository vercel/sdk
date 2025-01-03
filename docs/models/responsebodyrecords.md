# ResponseBodyRecords

## Example Usage

```typescript
import { ResponseBodyRecords } from "@vercel/sdk/models/getrecordsop.js";

let value: ResponseBodyRecords = {
  id: "<id>",
  slug: "<value>",
  name: "<value>",
  type: "TXT",
  value: "<value>",
  creator: "<value>",
  created: 738.26,
  updated: 4909.66,
  createdAt: 7175.60,
  updatedAt: 7381.52,
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