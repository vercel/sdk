# NinetyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetyFour } from "@vercel/sdk/models/usereventpayloadproject.js";

let value: NinetyFour = {
  action: "delete",
  initiator: "user",
  id: "<id>",
  domain: "lazy-crest.org",
  name: "<value>",
  type: "<value>",
  value: "<value>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `action`                                                                 | [models.UserEventPayload94Action](../models/usereventpayload94action.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `initiator`                                                              | [models.Initiator](../models/initiator.md)                               | :heavy_check_mark:                                                       | N/A                                                                      |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `domain`                                                                 | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `name`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `type`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `value`                                                                  | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `mxPriority`                                                             | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `previousValue`                                                          | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `source`                                                                 | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |