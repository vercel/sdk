# TwoHundredAndSeventyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSeventyNine } from "@vercel/sdk/models/twohundredandseventytwo.js";

let value: TwoHundredAndSeventyNine = {
  project: {
    name: "<value>",
  },
  projectMembership: {
    role: "PROJECT_DEVELOPER",
    uid: "<id>",
    createdAt: 3186.22,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `project`                                                                    | [models.UserEventPayload279Project](../models/usereventpayload279project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `projectMembership`                                                          | [models.ProjectMembership](../models/projectmembership.md)                   | :heavy_check_mark:                                                           | N/A                                                                          |