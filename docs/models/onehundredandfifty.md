# OneHundredAndFifty

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFifty } from "@vercel/sdk/models/payloadviewpreference.js";

let value: OneHundredAndFifty = {
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
| `team`                                                                       | [models.UserEventPayload150Team](../models/usereventpayload150team.md)       | :heavy_check_mark:                                                           | N/A                                                                          |
| `project`                                                                    | [models.UserEventPayload150Project](../models/usereventpayload150project.md) | :heavy_check_mark:                                                           | N/A                                                                          |