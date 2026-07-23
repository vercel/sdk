# ThreeHundredAndThirtyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndThirtyThree } from "@vercel/sdk/models/twohundredandeighty.js";

let value: ThreeHundredAndThirtyThree = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Christian_Schneider",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `entitlement`                                                    | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `user`                                                           | [models.UserEventPayloadUser](../models/usereventpayloaduser.md) | :heavy_check_mark:                                               | N/A                                                              |