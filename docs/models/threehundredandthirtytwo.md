# ThreeHundredAndThirtyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndThirtyTwo } from "@vercel/sdk/models/twohundredandseventythree.js";

let value: ThreeHundredAndThirtyTwo = {
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
| `project`                                                                    | [models.UserEventPayload332Project](../models/usereventpayload332project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `projectMembership`                                                          | [models.PayloadProjectMembership](../models/payloadprojectmembership.md)     | :heavy_check_mark:                                                           | N/A                                                                          |