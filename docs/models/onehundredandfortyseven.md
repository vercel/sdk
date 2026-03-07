# OneHundredAndFortySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFortySeven } from "@vercel/sdk/models/artifacts.js";

let value: OneHundredAndFortySeven = {
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
| `team`                                                                       | [models.UserEventPayload147Team](../models/usereventpayload147team.md)       | :heavy_check_mark:                                                           | N/A                                                                          |
| `project`                                                                    | [models.UserEventPayload147Project](../models/usereventpayload147project.md) | :heavy_check_mark:                                                           | N/A                                                                          |