# NinetySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetySeven } from "@vercel/sdk/models/usereventpayload70project.js";

let value: NinetySeven = {
  action: "delete",
  initiator: "system",
  id: "<id>",
  domain: "unfortunate-density.biz",
  name: "<value>",
  type: "<value>",
  value: "<value>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `action`                                                                 | [models.UserEventPayload97Action](../models/usereventpayload97action.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `initiator`                                                              | [models.Initiator](../models/initiator.md)                               | :heavy_check_mark:                                                       | N/A                                                                      |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `domain`                                                                 | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `name`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `type`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `value`                                                                  | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `mxPriority`                                                             | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `previousValue`                                                          | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `source`                                                                 | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |