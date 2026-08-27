# OneHundredAndTen

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTen } from "@vercel/sdk/models/ninetytwo.js";

let value: OneHundredAndTen = {
  action: "add",
  initiator: "user",
  id: "<id>",
  domain: "wrathful-characterization.net",
  name: "<value>",
  type: "<value>",
  value: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `action`                                                                   | [models.UserEventPayload110Action](../models/usereventpayload110action.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `initiator`                                                                | [models.Initiator](../models/initiator.md)                                 | :heavy_check_mark:                                                         | N/A                                                                        |
| `id`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `domain`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `name`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `type`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `value`                                                                    | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `mxPriority`                                                               | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `previousValue`                                                            | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `source`                                                                   | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |