# OneHundredAndSixteen

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixteen } from "@vercel/sdk/models/usereventpayload82resourcestype.js";

let value: OneHundredAndSixteen = {
  configuration: {
    id: "<id>",
  },
  project: {
    id: "<id>",
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
| `buildsEnabled`                                                              | *boolean*                                                                    | :heavy_minus_sign:                                                           | N/A                                                                          |
| `configuration`                                                              | [models.PayloadConfiguration](../models/payloadconfiguration.md)             | :heavy_check_mark:                                                           | N/A                                                                          |
| `project`                                                                    | [models.UserEventPayload116Project](../models/usereventpayload116project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `team`                                                                       | [models.UserEventPayload116Team](../models/usereventpayload116team.md)       | :heavy_check_mark:                                                           | N/A                                                                          |