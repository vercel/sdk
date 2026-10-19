# TwoHundredAndEightyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndEightyOne } from "@vercel/sdk/models/twohundredandfiftyone.js";

let value: TwoHundredAndEightyOne = {
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
| `project`                                                                    | [models.UserEventPayload281Project](../models/usereventpayload281project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `team`                                                                       | [models.UserEventPayload281Team](../models/usereventpayload281team.md)       | :heavy_check_mark:                                                           | N/A                                                                          |