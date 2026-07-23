# TwoHundredAndNineteen

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndNineteen } from "@vercel/sdk/models/twohundredandseven.js";

let value: TwoHundredAndNineteen = {
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
| `team`                                                                       | [models.UserEventPayload219Team](../models/usereventpayload219team.md)       | :heavy_check_mark:                                                           | N/A                                                                          |
| `project`                                                                    | [models.UserEventPayload219Project](../models/usereventpayload219project.md) | :heavy_check_mark:                                                           | N/A                                                                          |