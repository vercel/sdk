# ThreeHundredAndEighteen

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndEighteen } from "@vercel/sdk/models/threehundredandseventeen.js";

let value: ThreeHundredAndEighteen = {
  project: {
    name: "<value>",
  },
  projectMembership: {
    createdAt: 6695.81,
    role: "PROJECT_DEVELOPER",
    uid: "<id>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `project`                                                                    | [models.UserEventPayload318Project](../models/usereventpayload318project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `projectMembership`                                                          | [models.ProjectMembership](../models/projectmembership.md)                   | :heavy_check_mark:                                                           | N/A                                                                          |