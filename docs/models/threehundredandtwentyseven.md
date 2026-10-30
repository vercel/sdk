# ThreeHundredAndTwentySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTwentySeven } from "@vercel/sdk/models/usereventpayload261origin.js";

let value: ThreeHundredAndTwentySeven = {
  project: {
    name: "<value>",
  },
  removedMembership: {
    createdAt: 1375.78,
    role: "ADMIN",
    uid: "<id>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `project`                                                                    | [models.UserEventPayload327Project](../models/usereventpayload327project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `removedMembership`                                                          | [models.RemovedMembership](../models/removedmembership.md)                   | :heavy_check_mark:                                                           | N/A                                                                          |