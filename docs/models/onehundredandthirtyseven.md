# OneHundredAndThirtySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndThirtySeven } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndThirtySeven = {
  project: {
    name: "<value>",
  },
  removedMembership: {
    role: "ADMIN",
    uid: "<id>",
    createdAt: 1348.66,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `project`                                                                    | [models.UserEventPayload137Project](../models/usereventpayload137project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `removedMembership`                                                          | [models.RemovedMembership](../models/removedmembership.md)                   | :heavy_check_mark:                                                           | N/A                                                                          |