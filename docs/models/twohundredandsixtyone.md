# TwoHundredAndSixtyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSixtyOne } from "@vercel/sdk/models/twohundredandsixteen.js";

let value: TwoHundredAndSixtyOne = {
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
| `project`                                                                    | [models.UserEventPayload261Project](../models/usereventpayload261project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `team`                                                                       | [models.UserEventPayload261Team](../models/usereventpayload261team.md)       | :heavy_check_mark:                                                           | N/A                                                                          |