# ThreeHundredAndEighteen

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndEighteen } from "@vercel/sdk/models/threehundredandsixteen.js";

let value: ThreeHundredAndEighteen = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Dee.Hamill",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `entitlement`                                                    | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `user`                                                           | [models.UserEventPayloadUser](../models/usereventpayloaduser.md) | :heavy_check_mark:                                               | N/A                                                              |