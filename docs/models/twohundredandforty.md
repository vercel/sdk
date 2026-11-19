# TwoHundredAndForty

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndForty } from "@vercel/sdk/models/lasteditedbyprincipal1.js";

let value: TwoHundredAndForty = {
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
| `project`                                                                    | [models.UserEventPayload240Project](../models/usereventpayload240project.md) | :heavy_check_mark:                                                           | N/A                                                                          |