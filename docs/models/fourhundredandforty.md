# FourHundredAndForty

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndForty } from "@vercel/sdk/models/payloadcodereviewselection.js";

let value: FourHundredAndForty = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Shanon38",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `entitlement`                                                    | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `previousCanceledAt`                                             | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `user`                                                           | [models.UserEventPayloadUser](../models/usereventpayloaduser.md) | :heavy_check_mark:                                               | N/A                                                              |