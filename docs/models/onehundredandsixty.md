# OneHundredAndSixty

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixty } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndSixty = {
  project: {
    id: "<id>",
    name: "<value>",
  },
  prev: {
    project: {},
  },
  group: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `project`                                                                    | [models.UserEventPayload160Project](../models/usereventpayload160project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `prev`                                                                       | [models.PayloadPrev](../models/payloadprev.md)                               | :heavy_check_mark:                                                           | N/A                                                                          |
| `group`                                                                      | [models.PayloadGroup](../models/payloadgroup.md)                             | :heavy_check_mark:                                                           | N/A                                                                          |