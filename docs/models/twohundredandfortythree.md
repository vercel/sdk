# TwoHundredAndFortyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFortyThree } from "@vercel/sdk/models/siftroute.js";

let value: TwoHundredAndFortyThree = {
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
    newConnectConfigurations: [],
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `team`                                                                       | [models.UserEventPayload243Team](../models/usereventpayload243team.md)       | :heavy_check_mark:                                                           | N/A                                                                          |
| `project`                                                                    | [models.UserEventPayload243Project](../models/usereventpayload243project.md) | :heavy_check_mark:                                                           | N/A                                                                          |