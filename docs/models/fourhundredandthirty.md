# FourHundredAndThirty

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndThirty } from "@vercel/sdk/models/store.js";

let value: FourHundredAndThirty = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Sienna.Boyle",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `entitlement`                                                    | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `previousCanceledAt`                                             | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `user`                                                           | [models.UserEventPayloadUser](../models/usereventpayloaduser.md) | :heavy_check_mark:                                               | N/A                                                              |