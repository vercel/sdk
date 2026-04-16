# OneHundredAndNinetyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndNinetyFour } from "@vercel/sdk/models/onehundredandseventytwo.js";

let value: OneHundredAndNinetyFour = {
  project: {
    name: "<value>",
  },
  removedMembership: {
    role: "PROJECT_DEVELOPER",
    uid: "<id>",
    createdAt: 6103,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `project`                                                                    | [models.UserEventPayload194Project](../models/usereventpayload194project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `removedMembership`                                                          | [models.RemovedMembership](../models/removedmembership.md)                   | :heavy_check_mark:                                                           | N/A                                                                          |