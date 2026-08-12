# ThreeHundredAndFiftyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFiftyFive } from "@vercel/sdk/models/addedprojects.js";

let value: ThreeHundredAndFiftyFive = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Verna_Schmeler",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `entitlement`                                                    | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `user`                                                           | [models.UserEventPayloadUser](../models/usereventpayloaduser.md) | :heavy_check_mark:                                               | N/A                                                              |