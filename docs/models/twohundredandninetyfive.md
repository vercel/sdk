# TwoHundredAndNinetyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndNinetyFive } from "@vercel/sdk/models/twohundredandseventyfive.js";

let value: TwoHundredAndNinetyFive = {
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
| `project`                                                                    | [models.UserEventPayload295Project](../models/usereventpayload295project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `projectMembership`                                                          | [models.PayloadProjectMembership](../models/payloadprojectmembership.md)     | :heavy_check_mark:                                                           | N/A                                                                          |