# FourHundredAndSeven

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSeven } from "@vercel/sdk/models/usereventpayload373previous.js";

let value: FourHundredAndSeven = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Dell.Kling44",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `entitlement`                                                    | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `previousCanceledAt`                                             | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `user`                                                           | [models.UserEventPayloadUser](../models/usereventpayloaduser.md) | :heavy_check_mark:                                               | N/A                                                              |