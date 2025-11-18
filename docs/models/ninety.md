# Ninety

The payload of the event, if requested.

## Example Usage

```typescript
import { Ninety } from "@vercel/sdk/models/userevent.js";

let value: Ninety = {
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
| `team`                                                                     | [models.UserEventPayload90Team](../models/usereventpayload90team.md)       | :heavy_check_mark:                                                         | N/A                                                                        |
| `project`                                                                  | [models.UserEventPayload90Project](../models/usereventpayload90project.md) | :heavy_check_mark:                                                         | N/A                                                                        |