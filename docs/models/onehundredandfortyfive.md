# OneHundredAndFortyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFortyFive } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndFortyFive = {
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
    newConnectConfigurations: [],
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `team`                                                                       | [models.UserEventPayload145Team](../models/usereventpayload145team.md)       | :heavy_check_mark:                                                           | N/A                                                                          |
| `project`                                                                    | [models.UserEventPayload145Project](../models/usereventpayload145project.md) | :heavy_check_mark:                                                           | N/A                                                                          |