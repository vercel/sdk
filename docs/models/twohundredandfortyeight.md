# TwoHundredAndFortyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFortyEight } from "@vercel/sdk/models/siftroute.js";

let value: TwoHundredAndFortyEight = {
  team: {
    name: "<value>",
    id: "<id>",
  },
  project: {
    id: "<id>",
    oldConnectConfigurations: [
      {
        envId: "<id>",
        connectConfigurationId: "<id>",
        passive: false,
        buildsEnabled: true,
        createdAt: 9005.75,
        updatedAt: 8968.35,
      },
    ],
    newConnectConfigurations: null,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `team`                                                                       | [models.UserEventPayload248Team](../models/usereventpayload248team.md)       | :heavy_check_mark:                                                           | N/A                                                                          |
| `project`                                                                    | [models.UserEventPayload248Project](../models/usereventpayload248project.md) | :heavy_check_mark:                                                           | N/A                                                                          |