# TwoHundredAndSixtyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSixtyEight } from "@vercel/sdk/models/twohundredandtwentysix.js";

let value: TwoHundredAndSixtyEight = {
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
| `project`                                                                    | [models.UserEventPayload268Project](../models/usereventpayload268project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `team`                                                                       | [models.UserEventPayload268Team](../models/usereventpayload268team.md)       | :heavy_check_mark:                                                           | N/A                                                                          |