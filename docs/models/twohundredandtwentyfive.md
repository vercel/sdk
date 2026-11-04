# TwoHundredAndTwentyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwentyFive } from "@vercel/sdk/models/twohundredandsix.js";

let value: TwoHundredAndTwentyFive = {
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
| `project`                                                                    | [models.UserEventPayload225Project](../models/usereventpayload225project.md) | :heavy_check_mark:                                                           | N/A                                                                          |