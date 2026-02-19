# OneHundredAndTwentyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTwentyTwo } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndTwentyTwo = {
  team: {
    id: "<id>",
    name: "<value>",
  },
  project: {
    id: "<id>",
    oldConnectConfigurations: [],
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
| `team`                                                                       | [models.UserEventPayload122Team](../models/usereventpayload122team.md)       | :heavy_check_mark:                                                           | N/A                                                                          |
| `project`                                                                    | [models.UserEventPayload122Project](../models/usereventpayload122project.md) | :heavy_check_mark:                                                           | N/A                                                                          |