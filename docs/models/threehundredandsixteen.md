# ThreeHundredAndSixteen

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSixteen } from "@vercel/sdk/models/usereventpayloadrole.js";

let value: ThreeHundredAndSixteen = {
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
| `project`                                                                    | [models.UserEventPayload316Project](../models/usereventpayload316project.md) | :heavy_check_mark:                                                           | N/A                                                                          |