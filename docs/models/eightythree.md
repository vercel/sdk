# EightyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { EightyThree } from "@vercel/sdk/models/userevent.js";

let value: EightyThree = {
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
        createdAt: 2859.01,
        updatedAt: 2834.46,
      },
    ],
    newConnectConfigurations: [
      {
        envId: "preview",
        connectConfigurationId: "<id>",
        passive: false,
        buildsEnabled: false,
        createdAt: 3458.39,
        updatedAt: 9069.16,
      },
    ],
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `team`                                                                     | [models.UserEventPayload83Team](../models/usereventpayload83team.md)       | :heavy_check_mark:                                                         | N/A                                                                        |
| `project`                                                                  | [models.UserEventPayload83Project](../models/usereventpayload83project.md) | :heavy_check_mark:                                                         | N/A                                                                        |