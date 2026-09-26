# TwoHundredAndSix

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSix } from "@vercel/sdk/models/payloadspeedinsightsfree.js";

let value: TwoHundredAndSix = {
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
| `project`                                                                    | [models.UserEventPayload206Project](../models/usereventpayload206project.md) | :heavy_check_mark:                                                           | N/A                                                                          |