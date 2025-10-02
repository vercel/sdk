# OneHundredAndSeventeen

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSeventeen } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndSeventeen = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Roxanne.DAmore",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `entitlement`                                                    | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `user`                                                           | [models.UserEventPayloadUser](../models/usereventpayloaduser.md) | :heavy_check_mark:                                               | N/A                                                              |