# ThreeHundredAndSeventyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSeventyTwo } from "@vercel/sdk/models/threehundredandfortytwo.js";

let value: ThreeHundredAndSeventyTwo = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Scotty39",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `entitlement`                                                    | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `user`                                                           | [models.UserEventPayloadUser](../models/usereventpayloaduser.md) | :heavy_check_mark:                                               | N/A                                                              |