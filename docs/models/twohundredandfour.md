# TwoHundredAndFour

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFour } from "@vercel/sdk/models/microfrontends2.js";

let value: TwoHundredAndFour = {
  project: {
    name: "<value>",
  },
  projectMembership: {
    role: "PROJECT_DEVELOPER",
    uid: "<id>",
    createdAt: 3803.82,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `project`                                                                    | [models.UserEventPayload204Project](../models/usereventpayload204project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `projectMembership`                                                          | [models.ProjectMembership](../models/projectmembership.md)                   | :heavy_check_mark:                                                           | N/A                                                                          |