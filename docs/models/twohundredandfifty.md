# TwoHundredAndFifty

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFifty } from "@vercel/sdk/models/twohundredandtwentyfour.js";

let value: TwoHundredAndFifty = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Melisa_McDermott",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `entitlement`                                                          | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `user`                                                                 | [models.UserEventPayload250User](../models/usereventpayload250user.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `previousCanceledAt`                                                   | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |