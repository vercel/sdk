# ThreeHundredAndNinetyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndNinetyEight } from "@vercel/sdk/models/threehundredandsixtytwo.js";

let value: ThreeHundredAndNinetyEight = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Brock_Schaden",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `entitlement`                                                    | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `previousCanceledAt`                                             | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `user`                                                           | [models.UserEventPayloadUser](../models/usereventpayloaduser.md) | :heavy_check_mark:                                               | N/A                                                              |