# ThreeHundredAndThirtySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndThirtySeven } from "@vercel/sdk/models/twohundredandeightyfour.js";

let value: ThreeHundredAndThirtySeven = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Waylon.Cassin79",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `entitlement`                                                    | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `user`                                                           | [models.UserEventPayloadUser](../models/usereventpayloaduser.md) | :heavy_check_mark:                                               | N/A                                                              |