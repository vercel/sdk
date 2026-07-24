# TwoHundredAndTwentyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwentyThree } from "@vercel/sdk/models/twohundredandeleven.js";

let value: TwoHundredAndTwentyThree = {
  team: {
    id: "<id>",
    name: "<value>",
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
| `team`                                                                       | [models.UserEventPayload223Team](../models/usereventpayload223team.md)       | :heavy_check_mark:                                                           | N/A                                                                          |
| `project`                                                                    | [models.UserEventPayload223Project](../models/usereventpayload223project.md) | :heavy_check_mark:                                                           | N/A                                                                          |