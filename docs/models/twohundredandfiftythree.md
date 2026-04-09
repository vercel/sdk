# TwoHundredAndFiftyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFiftyThree } from "@vercel/sdk/models/twohundredandtwentyseven.js";

let value: TwoHundredAndFiftyThree = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Marielle3",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `entitlement`                                                          | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `user`                                                                 | [models.UserEventPayload253User](../models/usereventpayload253user.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `previousCanceledAt`                                                   | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |