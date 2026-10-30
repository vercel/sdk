# TwoHundredAndEightyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndEightyEight } from "@vercel/sdk/models/usereventpayload261origin.js";

let value: TwoHundredAndEightyEight = {
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
| `project`                                                                    | [models.UserEventPayload288Project](../models/usereventpayload288project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `team`                                                                       | [models.UserEventPayload288Team](../models/usereventpayload288team.md)       | :heavy_check_mark:                                                           | N/A                                                                          |