# ThreeHundredAndNine

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndNine } from "@vercel/sdk/models/twohundredandfortyfive.js";

let value: ThreeHundredAndNine = {
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
| `project`                                                                    | [models.UserEventPayload309Project](../models/usereventpayload309project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `team`                                                                       | [models.UserEventPayload309Team](../models/usereventpayload309team.md)       | :heavy_check_mark:                                                           | N/A                                                                          |