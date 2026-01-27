# OneHundredAndEightySix

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEightySix } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndEightySix = {
  project: {
    name: "<value>",
  },
  projectMembership: {
    role: "PROJECT_VIEWER",
    uid: "<id>",
    createdAt: 305.41,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `project`                                                                    | [models.UserEventPayload186Project](../models/usereventpayload186project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `projectMembership`                                                          | [models.ProjectMembership](../models/projectmembership.md)                   | :heavy_check_mark:                                                           | N/A                                                                          |