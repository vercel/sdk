# TwoHundredAndFive

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFive } from "@vercel/sdk/models/sourceimages.js";

let value: TwoHundredAndFive = {
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
| `project`                                                                    | [models.UserEventPayload205Project](../models/usereventpayload205project.md) | :heavy_check_mark:                                                           | N/A                                                                          |