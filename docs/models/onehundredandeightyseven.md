# OneHundredAndEightySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEightySeven } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndEightySeven = {
  project: {
    name: "<value>",
  },
  removedMembership: {
    role: "ADMIN",
    uid: "<id>",
    createdAt: 1313.3,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `project`                                                                    | [models.UserEventPayload187Project](../models/usereventpayload187project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `removedMembership`                                                          | [models.RemovedMembership](../models/removedmembership.md)                   | :heavy_check_mark:                                                           | N/A                                                                          |