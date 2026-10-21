# ThreeHundredAndNineteen

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndNineteen } from "@vercel/sdk/models/usereventpayload318project.js";

let value: ThreeHundredAndNineteen = {
  project: {
    invitedUserName: "<value>",
    name: "<value>",
    role: "PROJECT_GUEST",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `project`                                                                    | [models.UserEventPayload319Project](../models/usereventpayload319project.md) | :heavy_check_mark:                                                           | N/A                                                                          |