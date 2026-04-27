# OneHundredAndFiftyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFiftyNine } from "@vercel/sdk/models/two1.js";

let value: OneHundredAndFiftyNine = {
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
| `team`                                                                       | [models.UserEventPayload159Team](../models/usereventpayload159team.md)       | :heavy_check_mark:                                                           | N/A                                                                          |
| `project`                                                                    | [models.UserEventPayload159Project](../models/usereventpayload159project.md) | :heavy_check_mark:                                                           | N/A                                                                          |