# OneHundredAndTwentyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTwentyTwo } from "@vercel/sdk/models/eightynine.js";

let value: OneHundredAndTwentyTwo = {
  job: {
    deployHook: {
      createdAt: 3393.49,
      id: "<id>",
      name: "<value>",
      ref: "<value>",
    },
    state: "Pennsylvania",
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
| `project`                                                                    | [models.UserEventPayload122Project](../models/usereventpayload122project.md) | :heavy_check_mark:                                                           | N/A                                                                          |