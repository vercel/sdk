# TwoHundredAndThirteen

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndThirteen } from "@vercel/sdk/models/onehundredandsixtyfour.js";

let value: TwoHundredAndThirteen = {
  project: {
    name: "<value>",
  },
  projectMembership: {
    role: "ADMIN",
    uid: "<id>",
    createdAt: 5413.27,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `project`                                                                    | [models.UserEventPayload213Project](../models/usereventpayload213project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `projectMembership`                                                          | [models.ProjectMembership](../models/projectmembership.md)                   | :heavy_check_mark:                                                           | N/A                                                                          |