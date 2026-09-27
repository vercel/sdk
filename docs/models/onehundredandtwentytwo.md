# OneHundredAndTwentyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTwentyTwo } from "@vercel/sdk/models/usereventjobpayloadprovider.js";

let value: OneHundredAndTwentyTwo = {
  action: "update",
  domain: "arid-pigsty.org",
  id: "<id>",
  initiator: "user",
  name: "<value>",
  type: "<value>",
  value: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `action`                                                                   | [models.UserEventPayload122Action](../models/usereventpayload122action.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `domain`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `id`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `initiator`                                                                | [models.Initiator](../models/initiator.md)                                 | :heavy_check_mark:                                                         | N/A                                                                        |
| `mxPriority`                                                               | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `name`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `previousValue`                                                            | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `source`                                                                   | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `type`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `value`                                                                    | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |