# OneHundredAndEleven

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEleven } from "@vercel/sdk/models/ninetyeight.js";

let value: OneHundredAndEleven = {
  action: "delete",
  initiator: "user",
  id: "<id>",
  domain: "well-off-shipper.net",
  name: "<value>",
  type: "<value>",
  value: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `action`                                                                   | [models.UserEventPayload111Action](../models/usereventpayload111action.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `initiator`                                                                | [models.Initiator](../models/initiator.md)                                 | :heavy_check_mark:                                                         | N/A                                                                        |
| `id`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `domain`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `name`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `type`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `value`                                                                    | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `mxPriority`                                                               | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `previousValue`                                                            | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `source`                                                                   | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |