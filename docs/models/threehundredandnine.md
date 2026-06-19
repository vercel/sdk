# ThreeHundredAndNine

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndNine } from "@vercel/sdk/models/threehundredandfour.js";

let value: ThreeHundredAndNine = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Vicente_Toy73",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `entitlement`                                                    | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `user`                                                           | [models.UserEventPayloadUser](../models/usereventpayloaduser.md) | :heavy_check_mark:                                               | N/A                                                              |