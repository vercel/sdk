# GetDomainsRecordsByRecordIdResponseBody

## Example Usage

```typescript
import { GetDomainsRecordsByRecordIdResponseBody } from "@vercel/sdk/models/getdomainsrecordsbyrecordidop.js";

let value: GetDomainsRecordsByRecordIdResponseBody = {
  type: "AAAA",
  id: "<id>",
  name: "<value>",
  value: "<value>",
  creator: "<value>",
  domain: "handsome-swanling.info",
  recordType: "ALIAS",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `type`                                                                                 | [models.GetDomainsRecordsByRecordIdType](../models/getdomainsrecordsbyrecordidtype.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `name`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `value`                                                                                | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `creator`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `domain`                                                                               | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `ttl`                                                                                  | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `comment`                                                                              | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `recordType`                                                                           | [models.RecordType](../models/recordtype.md)                                           | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `createdAt`                                                                            | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |