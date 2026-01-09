# OneHundredAndTwentySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTwentySeven } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndTwentySeven = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Avery.Kovacek",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `entitlement`                                                    | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `user`                                                           | [models.UserEventPayloadUser](../models/usereventpayloaduser.md) | :heavy_check_mark:                                               | N/A                                                              |