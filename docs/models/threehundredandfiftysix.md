# ThreeHundredAndFiftySix

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFiftySix } from "@vercel/sdk/models/threehundredandtwentyfive.js";

let value: ThreeHundredAndFiftySix = {
  project: {
    name: "<value>",
  },
  removedMembership: {
    createdAt: 3993.73,
    role: "PROJECT_VIEWER",
    uid: "<id>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `project`                                                                    | [models.UserEventPayload356Project](../models/usereventpayload356project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `removedMembership`                                                          | [models.RemovedMembership](../models/removedmembership.md)                   | :heavy_check_mark:                                                           | N/A                                                                          |