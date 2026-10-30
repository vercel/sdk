# FourHundredAndTwentyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndTwentyFive } from "@vercel/sdk/models/usereventpayload390type.js";

let value: FourHundredAndTwentyFive = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Blanche_Pacocha",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `entitlement`                                                    | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `previousCanceledAt`                                             | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `user`                                                           | [models.UserEventPayloadUser](../models/usereventpayloaduser.md) | :heavy_check_mark:                                               | N/A                                                              |