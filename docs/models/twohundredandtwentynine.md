# TwoHundredAndTwentyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwentyNine } from "@vercel/sdk/models/usereventpayloaddeploymenttype.js";

let value: TwoHundredAndTwentyNine = {
  project: {
    name: "<value>",
  },
  projectMembership: {
    role: "PROJECT_GUEST",
    uid: "<id>",
    createdAt: 3682.17,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `project`                                                                    | [models.UserEventPayload229Project](../models/usereventpayload229project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `projectMembership`                                                          | [models.ProjectMembership](../models/projectmembership.md)                   | :heavy_check_mark:                                                           | N/A                                                                          |