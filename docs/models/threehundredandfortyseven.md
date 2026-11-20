# ThreeHundredAndFortySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFortySeven } from "@vercel/sdk/models/usereventpayload317type.js";

let value: ThreeHundredAndFortySeven = {
  project: {
    name: "<value>",
  },
  projectMembership: {
    createdAt: 8742.23,
    role: "PROJECT_GUEST",
    uid: "<id>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `project`                                                                    | [models.UserEventPayload347Project](../models/usereventpayload347project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `projectMembership`                                                          | [models.ProjectMembership](../models/projectmembership.md)                   | :heavy_check_mark:                                                           | N/A                                                                          |