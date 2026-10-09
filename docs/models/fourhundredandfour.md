# FourHundredAndFour

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFour } from "@vercel/sdk/models/threehundredandsixtyeight.js";

let value: FourHundredAndFour = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Jada_Jacobson",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `entitlement`                                                    | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `previousCanceledAt`                                             | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `user`                                                           | [models.UserEventPayloadUser](../models/usereventpayloaduser.md) | :heavy_check_mark:                                               | N/A                                                              |