# ThreeHundredAndFortyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFortyFour } from "@vercel/sdk/models/ssoprotection2.js";

let value: ThreeHundredAndFortyFour = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Elyse_Hirthe65",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `entitlement`                                                    | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `user`                                                           | [models.UserEventPayloadUser](../models/usereventpayloaduser.md) | :heavy_check_mark:                                               | N/A                                                              |