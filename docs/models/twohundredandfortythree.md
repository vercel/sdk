# TwoHundredAndFortyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFortyThree } from "@vercel/sdk/models/newenvvar.js";

let value: TwoHundredAndFortyThree = {
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
| `project`                                                                    | [models.UserEventPayload243Project](../models/usereventpayload243project.md) | :heavy_check_mark:                                                           | N/A                                                                          |