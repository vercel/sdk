# ThreeHundredAndTwentyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTwentyEight } from "@vercel/sdk/models/twohundredandseventytwo.js";

let value: ThreeHundredAndTwentyEight = {
  project: {
    name: "<value>",
  },
  projectMembership: {
    createdAt: 3702.7,
    role: "PROJECT_DEVELOPER",
    uid: "<id>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `project`                                                                    | [models.UserEventPayload328Project](../models/usereventpayload328project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `projectMembership`                                                          | [models.ProjectMembership](../models/projectmembership.md)                   | :heavy_check_mark:                                                           | N/A                                                                          |