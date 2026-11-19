# OneHundredAndTwelve

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTwelve } from "@vercel/sdk/models/payloadresources.js";

let value: OneHundredAndTwelve = {
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
| `project`                                                                    | [models.UserEventPayload112Project](../models/usereventpayload112project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `team`                                                                       | [models.UserEventPayload112Team](../models/usereventpayload112team.md)       | :heavy_check_mark:                                                           | N/A                                                                          |