# TwoHundredAndEightyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndEightyFive } from "@vercel/sdk/models/twohundredandeightyone.js";

let value: TwoHundredAndEightyFive = {
  project: {
    name: "<value>",
  },
  projectMembership: {
    role: "ADMIN",
    uid: "<id>",
    createdAt: 1759.07,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `project`                                                                    | [models.UserEventPayload285Project](../models/usereventpayload285project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `projectMembership`                                                          | [models.ProjectMembership](../models/projectmembership.md)                   | :heavy_check_mark:                                                           | N/A                                                                          |