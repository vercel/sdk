# ThreeHundredAndNinetyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndNinetyOne } from "@vercel/sdk/models/usereventpayload353geolocationnames.js";

let value: ThreeHundredAndNinetyOne = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Jannie_Bailey55",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `entitlement`                                                    | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `previousCanceledAt`                                             | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `user`                                                           | [models.UserEventPayloadUser](../models/usereventpayloaduser.md) | :heavy_check_mark:                                               | N/A                                                              |