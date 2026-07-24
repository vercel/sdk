# TwoHundredAndSixty

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSixty } from "@vercel/sdk/models/twohundredandeleven.js";

let value: TwoHundredAndSixty = {
  project: {
    name: "<value>",
  },
  removedMembership: {
    role: "PROJECT_GUEST",
    uid: "<id>",
    createdAt: 3821.15,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `project`                                                                    | [models.UserEventPayload260Project](../models/usereventpayload260project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `removedMembership`                                                          | [models.RemovedMembership](../models/removedmembership.md)                   | :heavy_check_mark:                                                           | N/A                                                                          |