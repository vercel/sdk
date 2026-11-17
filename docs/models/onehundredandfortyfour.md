# OneHundredAndFortyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFortyFour } from "@vercel/sdk/models/usereventpayloadallowlistedreadystatereasoninternal.js";

let value: OneHundredAndFortyFour = {
  action: "add",
  domain: "aged-fibre.com",
  id: "<id>",
  initiator: "system",
  name: "<value>",
  type: "<value>",
  value: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `action`                                                                   | [models.UserEventPayload144Action](../models/usereventpayload144action.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `domain`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `id`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `initiator`                                                                | [models.Initiator](../models/initiator.md)                                 | :heavy_check_mark:                                                         | N/A                                                                        |
| `mxPriority`                                                               | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `name`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `previousValue`                                                            | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `source`                                                                   | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `type`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `value`                                                                    | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |