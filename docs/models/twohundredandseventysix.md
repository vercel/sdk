# TwoHundredAndSeventySix

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSeventySix } from "@vercel/sdk/models/twohundredandsixtytwo.js";

let value: TwoHundredAndSeventySix = {
  project: {
    name: "<value>",
  },
  projectMembership: {
    role: "PROJECT_GUEST",
    uid: "<id>",
    createdAt: 3427.25,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `project`                                                                    | [models.UserEventPayload276Project](../models/usereventpayload276project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `projectMembership`                                                          | [models.ProjectMembership](../models/projectmembership.md)                   | :heavy_check_mark:                                                           | N/A                                                                          |