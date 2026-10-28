# EightyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { EightyFour } from "@vercel/sdk/models/usereventpayload21provider.js";

let value: EightyFour = {
  action: "cancel_plan",
  data: {
    planSlug: "v0_business",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `subscriptionId`                                                         | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `action`                                                                 | [models.UserEventPayload84Action](../models/usereventpayload84action.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `data`                                                                   | *models.UserEventPayloadData*                                            | :heavy_check_mark:                                                       | N/A                                                                      |