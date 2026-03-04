# OneHundredAndSeventySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSeventySeven } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndSeventySeven = {
  project: {
    name: "<value>",
  },
  removedMembership: {
    role: "PROJECT_GUEST",
    uid: "<id>",
    createdAt: 9573.49,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `project`                                                                    | [models.UserEventPayload177Project](../models/usereventpayload177project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `removedMembership`                                                          | [models.RemovedMembership](../models/removedmembership.md)                   | :heavy_check_mark:                                                           | N/A                                                                          |