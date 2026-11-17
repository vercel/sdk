# OneHundredAndEleven

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEleven } from "@vercel/sdk/models/allowlistedreadystatereasoninternal.js";

let value: OneHundredAndEleven = {
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
| `project`                                                                    | [models.UserEventPayload111Project](../models/usereventpayload111project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `team`                                                                       | [models.UserEventPayload111Team](../models/usereventpayload111team.md)       | :heavy_check_mark:                                                           | N/A                                                                          |