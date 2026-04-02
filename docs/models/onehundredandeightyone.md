# OneHundredAndEightyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEightyOne } from "@vercel/sdk/models/usereventpayload161next.js";

let value: OneHundredAndEightyOne = {
  project: {
    name: "<value>",
  },
  projectMembership: {
    role: "ADMIN",
    uid: "<id>",
    createdAt: 4.75,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `project`                                                                    | [models.UserEventPayload181Project](../models/usereventpayload181project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `projectMembership`                                                          | [models.ProjectMembership](../models/projectmembership.md)                   | :heavy_check_mark:                                                           | N/A                                                                          |