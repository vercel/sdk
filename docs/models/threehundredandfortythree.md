# ThreeHundredAndFortyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFortyThree } from "@vercel/sdk/models/threehundredandfour.js";

let value: ThreeHundredAndFortyThree = {
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
| `project`                                                                    | [models.UserEventPayload343Project](../models/usereventpayload343project.md) | :heavy_check_mark:                                                           | N/A                                                                          |