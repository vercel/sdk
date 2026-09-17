# OneHundredAndThree

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndThree } from "@vercel/sdk/models/onehundredandtwo.js";

let value: OneHundredAndThree = {
  job: {
    deployHook: {
      createdAt: 3393.49,
      id: "<id>",
      name: "<value>",
      ref: "<value>",
    },
    state: "Oklahoma",
  },
  project: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `job`                                                                        | [models.Job](../models/job.md)                                               | :heavy_check_mark:                                                           | N/A                                                                          |
| `project`                                                                    | [models.UserEventPayload103Project](../models/usereventpayload103project.md) | :heavy_check_mark:                                                           | N/A                                                                          |