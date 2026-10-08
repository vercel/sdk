# FourHundredAndTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndTwo } from "@vercel/sdk/models/threehundredandsixtysix.js";

let value: FourHundredAndTwo = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Annabelle97",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `entitlement`                                                    | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `previousCanceledAt`                                             | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `user`                                                           | [models.UserEventPayloadUser](../models/usereventpayloaduser.md) | :heavy_check_mark:                                               | N/A                                                              |