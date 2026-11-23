# ThreeHundredAndThirteen

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndThirteen } from "@vercel/sdk/models/usereventpayload260next.js";

let value: ThreeHundredAndThirteen = {
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
| `project`                                                                    | [models.UserEventPayload313Project](../models/usereventpayload313project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `team`                                                                       | [models.UserEventPayload313Team](../models/usereventpayload313team.md)       | :heavy_check_mark:                                                           | N/A                                                                          |