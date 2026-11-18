# ThreeHundredAndFortyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFortyEight } from "@vercel/sdk/models/payloadaws.js";

let value: ThreeHundredAndFortyEight = {
  project: {
    name: "<value>",
  },
  removedMembership: {
    createdAt: 9528.58,
    role: "PROJECT_DEVELOPER",
    uid: "<id>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `project`                                                                    | [models.UserEventPayload348Project](../models/usereventpayload348project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `removedMembership`                                                          | [models.RemovedMembership](../models/removedmembership.md)                   | :heavy_check_mark:                                                           | N/A                                                                          |