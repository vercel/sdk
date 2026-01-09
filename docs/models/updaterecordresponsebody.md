# UpdateRecordResponseBody

## Example Usage

```typescript
import { UpdateRecordResponseBody } from "@vercel/sdk/models/updaterecordop.js";

let value: UpdateRecordResponseBody = {
  id: "<id>",
  name: "<value>",
  type: "record",
  value: "<value>",
  creator: "<value>",
  domain: "flowery-rawhide.info",
  recordType: "MX",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `id`                                                           | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `name`                                                         | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `type`                                                         | [models.UpdateRecordDnsType](../models/updaterecorddnstype.md) | :heavy_check_mark:                                             | N/A                                                            |
| `value`                                                        | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `creator`                                                      | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `domain`                                                       | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `ttl`                                                          | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `comment`                                                      | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `recordType`                                                   | [models.RecordType](../models/recordtype.md)                   | :heavy_check_mark:                                             | N/A                                                            |
| `createdAt`                                                    | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            |