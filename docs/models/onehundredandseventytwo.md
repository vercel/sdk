# OneHundredAndSeventyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSeventyTwo } from "@vercel/sdk/models/onehundredandfiftysix.js";

let value: OneHundredAndSeventyTwo = {
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

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `team`                                                                       | [models.UserEventPayload172Team](../models/usereventpayload172team.md)       | :heavy_check_mark:                                                           | N/A                                                                          |
| `project`                                                                    | [models.UserEventPayload172Project](../models/usereventpayload172project.md) | :heavy_check_mark:                                                           | N/A                                                                          |