# OneHundredAndNinetySix

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndNinetySix } from "@vercel/sdk/models/removedusers.js";

let value: OneHundredAndNinetySix = {
  team: {
    id: "<id>",
    name: "<value>",
  },
  project: {
    id: "<id>",
    oldConnectConfigurations: [],
    newConnectConfigurations: [],
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `team`                                                                       | [models.UserEventPayload196Team](../models/usereventpayload196team.md)       | :heavy_check_mark:                                                           | N/A                                                                          |
| `project`                                                                    | [models.UserEventPayload196Project](../models/usereventpayload196project.md) | :heavy_check_mark:                                                           | N/A                                                                          |