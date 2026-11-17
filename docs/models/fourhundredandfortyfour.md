# FourHundredAndFortyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFortyFour } from "@vercel/sdk/models/fourhundredandnineteen.js";

let value: FourHundredAndFortyFour = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Hazel27",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `entitlement`                                                    | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `previousCanceledAt`                                             | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `user`                                                           | [models.UserEventPayloadUser](../models/usereventpayloaduser.md) | :heavy_check_mark:                                               | N/A                                                              |