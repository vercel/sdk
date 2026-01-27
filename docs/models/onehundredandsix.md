# OneHundredAndSix

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSix } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndSix = {
  team: {
    id: "<id>",
    name: "<value>",
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
    newConnectConfigurations: [
      {
        envId: "<id>",
        connectConfigurationId: "<id>",
        passive: true,
        buildsEnabled: false,
        createdAt: 5463.76,
        updatedAt: 2696.76,
      },
    ],
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `team`                                                                       | [models.UserEventPayload106Team](../models/usereventpayload106team.md)       | :heavy_check_mark:                                                           | N/A                                                                          |
| `project`                                                                    | [models.UserEventPayload106Project](../models/usereventpayload106project.md) | :heavy_check_mark:                                                           | N/A                                                                          |