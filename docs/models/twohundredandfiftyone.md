# TwoHundredAndFiftyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFiftyOne } from "@vercel/sdk/models/payloadnext.js";

let value: TwoHundredAndFiftyOne = {
  project: {
    id: "<id>",
    newConnectConfigurations: [],
    oldConnectConfigurations: [
      {
        buildsEnabled: true,
        connectConfigurationId: "<id>",
        createdAt: 7630.36,
        envId: "<id>",
        passive: false,
        updatedAt: 8968.35,
      },
    ],
  },
  team: {
    id: "<id>",
    name: "<value>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `project`                                                                    | [models.UserEventPayload251Project](../models/usereventpayload251project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `team`                                                                       | [models.UserEventPayload251Team](../models/usereventpayload251team.md)       | :heavy_check_mark:                                                           | N/A                                                                          |