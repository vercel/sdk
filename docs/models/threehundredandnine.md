# ThreeHundredAndNine

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndNine } from "@vercel/sdk/models/twohundredandninetyfive.js";

let value: ThreeHundredAndNine = {
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
| `project`                                                                    | [models.UserEventPayload309Project](../models/usereventpayload309project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `projectMembership`                                                          | [models.PayloadProjectMembership](../models/payloadprojectmembership.md)     | :heavy_check_mark:                                                           | N/A                                                                          |