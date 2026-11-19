# ThreeHundredAndFortySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFortySeven } from "@vercel/sdk/models/threehundredandfifteen.js";

let value: ThreeHundredAndFortySeven = {
  project: {
    invitedUserName: "<value>",
    name: "<value>",
    role: "PROJECT_VIEWER",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `project`                                                                    | [models.UserEventPayload347Project](../models/usereventpayload347project.md) | :heavy_check_mark:                                                           | N/A                                                                          |