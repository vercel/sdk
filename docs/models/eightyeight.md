# EightyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { EightyEight } from "@vercel/sdk/models/rule.js";

let value: EightyEight = {
  action: "cancel_plan",
  data: {
    planSlug: "hobby",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `subscriptionId`                                                         | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `action`                                                                 | [models.UserEventPayload88Action](../models/usereventpayload88action.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `data`                                                                   | *models.UserEventPayloadData*                                            | :heavy_check_mark:                                                       | N/A                                                                      |