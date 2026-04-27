# OneHundredAndNinetyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndNinetyEight } from "@vercel/sdk/models/onehundredandninetytwo.js";

let value: OneHundredAndNinetyEight = {
  project: {
    id: "<id>",
    name: "<value>",
  },
  projectMembership: {},
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `project`                                                                    | [models.UserEventPayload198Project](../models/usereventpayload198project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `projectMembership`                                                          | [models.PayloadProjectMembership](../models/payloadprojectmembership.md)     | :heavy_check_mark:                                                           | N/A                                                                          |