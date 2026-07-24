# TwoHundredAndSixtyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSixtyOne } from "@vercel/sdk/models/twohundredandeleven.js";

let value: TwoHundredAndSixtyOne = {
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
| `project`                                                                    | [models.UserEventPayload261Project](../models/usereventpayload261project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `projectMembership`                                                          | [models.PayloadProjectMembership](../models/payloadprojectmembership.md)     | :heavy_check_mark:                                                           | N/A                                                                          |