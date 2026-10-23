# ThreeHundredAndTwentyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTwentyFive } from "@vercel/sdk/models/threehundredandtwentythree.js";

let value: ThreeHundredAndTwentyFive = {
  project: {
    id: "<id>",
    name: "<value>",
  },
  projectMembership: {},
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `project`                                                                    | [models.UserEventPayload325Project](../models/usereventpayload325project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `projectMembership`                                                          | [models.PayloadProjectMembership](../models/payloadprojectmembership.md)     | :heavy_check_mark:                                                           | N/A                                                                          |