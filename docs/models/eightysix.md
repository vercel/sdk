# EightySix

The payload of the event, if requested.

## Example Usage

```typescript
import { EightySix } from "@vercel/sdk/models/userevent.js";

let value: EightySix = {
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

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `team`                                                                     | [models.UserEventPayload86Team](../models/usereventpayload86team.md)       | :heavy_check_mark:                                                         | N/A                                                                        |
| `project`                                                                  | [models.UserEventPayload86Project](../models/usereventpayload86project.md) | :heavy_check_mark:                                                         | N/A                                                                        |