# NinetySix

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetySix } from "@vercel/sdk/models/eightytwo.js";

let value: NinetySix = {
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
| `action`                                                                 | [models.UserEventPayload96Action](../models/usereventpayload96action.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `data`                                                                   | *models.UserEventPayloadData*                                            | :heavy_check_mark:                                                       | N/A                                                                      |