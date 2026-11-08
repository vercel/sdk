# ThreeHundredAndThirtyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndThirtyThree } from "@vercel/sdk/models/usereventpayload279scope.js";

let value: ThreeHundredAndThirtyThree = {
  project: {
    name: "<value>",
  },
  projectMembership: {
    createdAt: 2325.68,
    role: "PROJECT_VIEWER",
    uid: "<id>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `project`                                                                    | [models.UserEventPayload333Project](../models/usereventpayload333project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `projectMembership`                                                          | [models.ProjectMembership](../models/projectmembership.md)                   | :heavy_check_mark:                                                           | N/A                                                                          |