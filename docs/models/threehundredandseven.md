# ThreeHundredAndSeven

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSeven } from "@vercel/sdk/models/twohundredandninetyfour.js";

let value: ThreeHundredAndSeven = {
  project: {
    name: "<value>",
  },
  removedMembership: {
    createdAt: 4080.81,
    role: "ADMIN",
    uid: "<id>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `project`                                                                    | [models.UserEventPayload307Project](../models/usereventpayload307project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `removedMembership`                                                          | [models.RemovedMembership](../models/removedmembership.md)                   | :heavy_check_mark:                                                           | N/A                                                                          |