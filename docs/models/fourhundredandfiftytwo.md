# FourHundredAndFiftyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFiftyTwo } from "@vercel/sdk/models/usereventpayload426next.js";

let value: FourHundredAndFiftyTwo = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Murl_Lind-Vandervort45",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `entitlement`                                                    | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `previousCanceledAt`                                             | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `user`                                                           | [models.UserEventPayloadUser](../models/usereventpayloaduser.md) | :heavy_check_mark:                                               | N/A                                                              |