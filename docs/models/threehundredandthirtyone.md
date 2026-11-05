# ThreeHundredAndThirtyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndThirtyOne } from "@vercel/sdk/models/twohundredandseventytwo.js";

let value: ThreeHundredAndThirtyOne = {
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
| `project`                                                                    | [models.UserEventPayload331Project](../models/usereventpayload331project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `projectMembership`                                                          | [models.PayloadProjectMembership](../models/payloadprojectmembership.md)     | :heavy_check_mark:                                                           | N/A                                                                          |