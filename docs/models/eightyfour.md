# EightyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { EightyFour } from "@vercel/sdk/models/userevent.js";

let value: EightyFour = {
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
        buildsEnabled: false,
        createdAt: 1198.73,
        updatedAt: 5450.64,
      },
    ],
    newConnectConfigurations: [
      {
        envId: "production",
        connectConfigurationId: "<id>",
        passive: false,
        buildsEnabled: false,
        createdAt: 9414.28,
        updatedAt: 9502.17,
      },
    ],
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `team`                                                                     | [models.UserEventPayload84Team](../models/usereventpayload84team.md)       | :heavy_check_mark:                                                         | N/A                                                                        |
| `project`                                                                  | [models.UserEventPayload84Project](../models/usereventpayload84project.md) | :heavy_check_mark:                                                         | N/A                                                                        |