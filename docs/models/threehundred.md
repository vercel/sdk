# ThreeHundred

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundred } from "@vercel/sdk/models/twohundredandeightythree.js";

let value: ThreeHundred = {
  project: {
    name: "<value>",
  },
  removedMembership: {
    createdAt: 4383.12,
    role: "ADMIN",
    uid: "<id>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `project`                                                                    | [models.UserEventPayload300Project](../models/usereventpayload300project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `removedMembership`                                                          | [models.RemovedMembership](../models/removedmembership.md)                   | :heavy_check_mark:                                                           | N/A                                                                          |