# RequestBody9

## Example Usage

```typescript
import { RequestBody9 } from "@vercel/sdk/models/createrecordop.js";

let value: RequestBody9 = {
  name: "subdomain",
  type: "ALIAS",
  ttl: 60,
  value: "ns1.example.com",
  comment: "used to verify ownership of domain",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `name`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | A subdomain name.                                                                                    | subdomain                                                                                            |
| `type`                                                                                               | [models.CreateRecordRequestBodyDnsRequest9Type](../models/createrecordrequestbodydnsrequest9type.md) | :heavy_check_mark:                                                                                   | The type of record, it could be one of the valid DNS records.                                        |                                                                                                      |
| `ttl`                                                                                                | *number*                                                                                             | :heavy_minus_sign:                                                                                   | The TTL value. Must be a number between 60 and 2147483647. Default value is 60.                      | 60                                                                                                   |
| `value`                                                                                              | *string*                                                                                             | :heavy_minus_sign:                                                                                   | An NS domain value.                                                                                  | ns1.example.com                                                                                      |
| `comment`                                                                                            | *string*                                                                                             | :heavy_minus_sign:                                                                                   | A comment to add context on what this DNS record is for                                              | used to verify ownership of domain                                                                   |