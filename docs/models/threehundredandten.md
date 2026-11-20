# ThreeHundredAndTen

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTen } from "@vercel/sdk/models/payloaddsyncmode.js";

let value: ThreeHundredAndTen = {
  project: {
    id: "<id>",
    newConnectConfigurations: [
      {
        buildsEnabled: true,
        connectConfigurationId: "<id>",
        createdAt: 4721.36,
        envId: "production",
        passive: true,
        updatedAt: 452.34,
      },
    ],
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
| `project`                                                                    | [models.UserEventPayload310Project](../models/usereventpayload310project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `team`                                                                       | [models.UserEventPayload310Team](../models/usereventpayload310team.md)       | :heavy_check_mark:                                                           | N/A                                                                          |