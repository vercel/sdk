# GetDomainsRecordsByRecordIdResponseBody

## Example Usage

```typescript
import { GetDomainsRecordsByRecordIdResponseBody } from "@vercel/sdk/models/getdomainsrecordsbyrecordidop.js";

let value: GetDomainsRecordsByRecordIdResponseBody = {
  creator: "<value>",
  domain: "dismal-forage.org",
  id: "<id>",
  name: "<value>",
  recordType: "CNAME",
  type: "ALIAS",
  value: "<value>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `comment`                                                                              | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `createdAt`                                                                            | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `creator`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `domain`                                                                               | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `name`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `recordType`                                                                           | [models.RecordType](../models/recordtype.md)                                           | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `ttl`                                                                                  | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `type`                                                                                 | [models.GetDomainsRecordsByRecordIdType](../models/getdomainsrecordsbyrecordidtype.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `value`                                                                                | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |