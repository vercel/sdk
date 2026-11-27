# ThreeHundredAndSeventeen

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSeventeen } from "@vercel/sdk/models/usereventpayloaddsyncmode.js";

let value: ThreeHundredAndSeventeen = {
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
| `project`                                                                    | [models.UserEventPayload317Project](../models/usereventpayload317project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `team`                                                                       | [models.UserEventPayload317Team](../models/usereventpayload317team.md)       | :heavy_check_mark:                                                           | N/A                                                                          |