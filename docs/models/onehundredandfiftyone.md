# OneHundredAndFiftyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFiftyOne } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndFiftyOne = {
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
| `project`                                                                    | [models.UserEventPayload151Project](../models/usereventpayload151project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `prev`                                                                       | [models.PayloadPrev](../models/payloadprev.md)                               | :heavy_check_mark:                                                           | N/A                                                                          |
| `group`                                                                      | [models.PayloadGroup](../models/payloadgroup.md)                             | :heavy_check_mark:                                                           | N/A                                                                          |