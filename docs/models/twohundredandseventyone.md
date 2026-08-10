# TwoHundredAndSeventyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSeventyOne } from "@vercel/sdk/models/twohundredandfortyone.js";

let value: TwoHundredAndSeventyOne = {
  project: {
    name: "<value>",
  },
  removedMembership: {
    role: "PROJECT_VIEWER",
    uid: "<id>",
    createdAt: 905.99,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `project`                                                                    | [models.UserEventPayload271Project](../models/usereventpayload271project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `removedMembership`                                                          | [models.RemovedMembership](../models/removedmembership.md)                   | :heavy_check_mark:                                                           | N/A                                                                          |