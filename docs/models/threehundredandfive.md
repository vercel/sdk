# ThreeHundredAndFive

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFive } from "@vercel/sdk/models/threehundredandfour.js";

let value: ThreeHundredAndFive = {
  project: {
    id: "<id>",
    newConnectConfigurations: [],
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
| `project`                                                                    | [models.UserEventPayload305Project](../models/usereventpayload305project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `team`                                                                       | [models.UserEventPayload305Team](../models/usereventpayload305team.md)       | :heavy_check_mark:                                                           | N/A                                                                          |