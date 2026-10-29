# FourHundredAndTwenty

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndTwenty } from "@vercel/sdk/models/usereventpayload387scope.js";

let value: FourHundredAndTwenty = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Torey.Rath11",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `entitlement`                                                    | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `previousCanceledAt`                                             | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `user`                                                           | [models.UserEventPayloadUser](../models/usereventpayloaduser.md) | :heavy_check_mark:                                               | N/A                                                              |