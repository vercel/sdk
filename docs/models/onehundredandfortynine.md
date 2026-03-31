# OneHundredAndFortyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFortyNine } from "@vercel/sdk/models/payloadactivedashboardviews.js";

let value: OneHundredAndFortyNine = {
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
| `team`                                                                       | [models.UserEventPayload149Team](../models/usereventpayload149team.md)       | :heavy_check_mark:                                                           | N/A                                                                          |
| `project`                                                                    | [models.UserEventPayload149Project](../models/usereventpayload149project.md) | :heavy_check_mark:                                                           | N/A                                                                          |