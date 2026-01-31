# OneHundredAndNinety

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndNinety } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndNinety = {
  project: {
    name: "<value>",
  },
  projectMembership: {
    role: "ADMIN",
    uid: "<id>",
    createdAt: 8833.27,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `project`                                                                    | [models.UserEventPayload190Project](../models/usereventpayload190project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `projectMembership`                                                          | [models.ProjectMembership](../models/projectmembership.md)                   | :heavy_check_mark:                                                           | N/A                                                                          |