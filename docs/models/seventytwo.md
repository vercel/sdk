# SeventyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { SeventyTwo } from "@vercel/sdk/models/fiftyfour.js";

let value: SeventyTwo = {
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
| `action`                                                                 | [models.UserEventPayload72Action](../models/usereventpayload72action.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `data`                                                                   | [models.UserEventPayloadData](../models/usereventpayloaddata.md)         | :heavy_check_mark:                                                       | N/A                                                                      |