# ThreeHundredAndFortyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFortyTwo } from "@vercel/sdk/models/twohundredandninetynine.js";

let value: ThreeHundredAndFortyTwo = {
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
| `project`                                                                    | [models.UserEventPayload342Project](../models/usereventpayload342project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `projectMembership`                                                          | [models.PayloadProjectMembership](../models/payloadprojectmembership.md)     | :heavy_check_mark:                                                           | N/A                                                                          |