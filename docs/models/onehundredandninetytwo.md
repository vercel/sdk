# OneHundredAndNinetyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndNinetyTwo } from "@vercel/sdk/models/onehundredandseventytwo.js";

let value: OneHundredAndNinetyTwo = {
  project: {
    name: "<value>",
  },
  projectMembership: {
    role: "PROJECT_GUEST",
    uid: "<id>",
    createdAt: 4908.44,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `project`                                                                    | [models.UserEventPayload192Project](../models/usereventpayload192project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `projectMembership`                                                          | [models.ProjectMembership](../models/projectmembership.md)                   | :heavy_check_mark:                                                           | N/A                                                                          |