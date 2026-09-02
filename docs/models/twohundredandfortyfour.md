# TwoHundredAndFortyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFortyFour } from "@vercel/sdk/models/siftroute.js";

let value: TwoHundredAndFortyFour = {
  team: {
    name: "<value>",
    id: "<id>",
  },
  project: {
    id: "<id>",
    oldConnectConfigurations: [],
    newConnectConfigurations: [],
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `team`                                                                       | [models.UserEventPayload244Team](../models/usereventpayload244team.md)       | :heavy_check_mark:                                                           | N/A                                                                          |
| `project`                                                                    | [models.UserEventPayload244Project](../models/usereventpayload244project.md) | :heavy_check_mark:                                                           | N/A                                                                          |