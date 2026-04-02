# OneHundredAndEightyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEightyFour } from "@vercel/sdk/models/usereventpayload161next.js";

let value: OneHundredAndEightyFour = {
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
| `project`                                                                    | [models.UserEventPayload184Project](../models/usereventpayload184project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `projectMembership`                                                          | [models.PayloadProjectMembership](../models/payloadprojectmembership.md)     | :heavy_check_mark:                                                           | N/A                                                                          |