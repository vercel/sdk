# NinetySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetySeven } from "@vercel/sdk/models/usereventpayloaditems.js";

let value: NinetySeven = {
  action: "resume_plan",
  data: {
    planSlug: "v0_business",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `subscriptionId`                                                         | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `action`                                                                 | [models.UserEventPayload97Action](../models/usereventpayload97action.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `data`                                                                   | [models.PayloadData](../models/payloaddata.md)                           | :heavy_check_mark:                                                       | N/A                                                                      |