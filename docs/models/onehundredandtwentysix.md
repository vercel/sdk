# OneHundredAndTwentySix

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTwentySix } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndTwentySix = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Breanna_Lebsack",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `entitlement`                                                    | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `user`                                                           | [models.UserEventPayloadUser](../models/usereventpayloaduser.md) | :heavy_check_mark:                                               | N/A                                                              |