# TwoHundredAndEleven

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndEleven } from "@vercel/sdk/models/redisoveragereason.js";

let value: TwoHundredAndEleven = {
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
| `project`                                                                    | [models.UserEventPayload211Project](../models/usereventpayload211project.md) | :heavy_check_mark:                                                           | N/A                                                                          |