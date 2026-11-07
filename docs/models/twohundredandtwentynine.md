# TwoHundredAndTwentyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwentyNine } from "@vercel/sdk/models/factors1.js";

let value: TwoHundredAndTwentyNine = {
  group: {
    id: "<id>",
    name: "<value>",
    slug: "<value>",
  },
  prev: {
    project: {},
  },
  project: {
    id: "<id>",
    name: "<value>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `group`                                                                      | [models.PayloadGroup](../models/payloadgroup.md)                             | :heavy_check_mark:                                                           | N/A                                                                          |
| `prev`                                                                       | [models.PayloadPrev](../models/payloadprev.md)                               | :heavy_check_mark:                                                           | N/A                                                                          |
| `project`                                                                    | [models.UserEventPayload229Project](../models/usereventpayload229project.md) | :heavy_check_mark:                                                           | N/A                                                                          |