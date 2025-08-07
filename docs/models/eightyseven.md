# EightySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { EightySeven } from "@vercel/sdk/models/userevent.js";

let value: EightySeven = {
  team: {
    id: "<id>",
    name: "<value>",
  },
  project: {
    id: "<id>",
    oldConnectConfigurations: null,
    newConnectConfigurations: [
      {
        envId: "<id>",
        connectConfigurationId: "<id>",
        passive: true,
        buildsEnabled: false,
        createdAt: 5463.76,
        updatedAt: 2696.76,
      },
    ],
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `team`                                                                     | [models.UserEventPayload87Team](../models/usereventpayload87team.md)       | :heavy_check_mark:                                                         | N/A                                                                        |
| `project`                                                                  | [models.UserEventPayload87Project](../models/usereventpayload87project.md) | :heavy_check_mark:                                                         | N/A                                                                        |