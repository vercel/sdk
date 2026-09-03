# ThreeHundredAndSixtySix

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSixtySix } from "@vercel/sdk/models/usereventpayload335budget.js";

let value: ThreeHundredAndSixtySix = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Cyrus.Buckridge57",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `entitlement`                                                    | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `user`                                                           | [models.UserEventPayloadUser](../models/usereventpayloaduser.md) | :heavy_check_mark:                                               | N/A                                                              |