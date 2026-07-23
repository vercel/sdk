# OneHundredAndSeventyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSeventyThree } from "@vercel/sdk/models/preventautoblocking.js";

let value: OneHundredAndSeventyThree = {
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
| `project`                                                                    | [models.UserEventPayload173Project](../models/usereventpayload173project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `group`                                                                      | [models.Group](../models/group.md)                                           | :heavy_check_mark:                                                           | N/A                                                                          |