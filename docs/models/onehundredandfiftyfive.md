# OneHundredAndFiftyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFiftyFive } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndFiftyFive = {
  project: {
    id: "<id>",
    name: "<value>",
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
| `project`                                                                    | [models.UserEventPayload155Project](../models/usereventpayload155project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `group`                                                                      | [models.Group](../models/group.md)                                           | :heavy_check_mark:                                                           | N/A                                                                          |