# ThreeHundredAndThirtyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndThirtyFour } from "@vercel/sdk/models/usereventpayload278scope.js";

let value: ThreeHundredAndThirtyFour = {
  project: {
    name: "<value>",
  },
  removedMembership: {
    createdAt: 1045.89,
    role: "PROJECT_DEVELOPER",
    uid: "<id>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `project`                                                                    | [models.UserEventPayload334Project](../models/usereventpayload334project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `removedMembership`                                                          | [models.RemovedMembership](../models/removedmembership.md)                   | :heavy_check_mark:                                                           | N/A                                                                          |