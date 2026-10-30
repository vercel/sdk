# TwoHundredAndTwentyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwentyFive } from "@vercel/sdk/models/newowner.js";

let value: TwoHundredAndTwentyFive = {
  group: {
    id: "<id>",
    name: "<value>",
    slug: "<value>",
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
| `group`                                                                      | [models.Group](../models/group.md)                                           | :heavy_check_mark:                                                           | N/A                                                                          |
| `project`                                                                    | [models.UserEventPayload225Project](../models/usereventpayload225project.md) | :heavy_check_mark:                                                           | N/A                                                                          |