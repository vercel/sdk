# TwoHundredAndFortySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFortySeven } from "@vercel/sdk/models/siftroute.js";

let value: TwoHundredAndFortySeven = {
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
| `team`                                                                       | [models.UserEventPayload247Team](../models/usereventpayload247team.md)       | :heavy_check_mark:                                                           | N/A                                                                          |
| `project`                                                                    | [models.UserEventPayload247Project](../models/usereventpayload247project.md) | :heavy_check_mark:                                                           | N/A                                                                          |