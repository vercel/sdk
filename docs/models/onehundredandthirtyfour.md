# OneHundredAndThirtyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndThirtyFour } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndThirtyFour = {
  project: {
    name: "<value>",
  },
  removedMembership: {},
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `project`                                                                    | [models.UserEventPayload134Project](../models/usereventpayload134project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `removedMembership`                                                          | [models.RemovedMembership](../models/removedmembership.md)                   | :heavy_check_mark:                                                           | N/A                                                                          |