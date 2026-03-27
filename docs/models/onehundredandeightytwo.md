# OneHundredAndEightyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEightyTwo } from "@vercel/sdk/models/usereventpayload159next.js";

let value: OneHundredAndEightyTwo = {
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
| `project`                                                                    | [models.UserEventPayload182Project](../models/usereventpayload182project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `projectMembership`                                                          | [models.PayloadProjectMembership](../models/payloadprojectmembership.md)     | :heavy_check_mark:                                                           | N/A                                                                          |