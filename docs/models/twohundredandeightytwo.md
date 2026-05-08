# TwoHundredAndEightyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndEightyTwo } from "@vercel/sdk/models/twohundredandseventyfour.js";

let value: TwoHundredAndEightyTwo = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Mariam73",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `entitlement`                                                          | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `user`                                                                 | [models.UserEventPayload282User](../models/usereventpayload282user.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `previousCanceledAt`                                                   | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |