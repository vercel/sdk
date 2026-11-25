# ThreeHundredAndSixteen

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSixteen } from "@vercel/sdk/models/twohundredandsixtyseven.js";

let value: ThreeHundredAndSixteen = {
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
    oldConnectConfigurations: [],
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
| `project`                                                                    | [models.UserEventPayload316Project](../models/usereventpayload316project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `team`                                                                       | [models.UserEventPayload316Team](../models/usereventpayload316team.md)       | :heavy_check_mark:                                                           | N/A                                                                          |