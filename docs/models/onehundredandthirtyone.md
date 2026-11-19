# OneHundredAndThirtyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndThirtyOne } from "@vercel/sdk/models/payloadresources.js";

let value: OneHundredAndThirtyOne = {
  job: {
    deployHook: {
      createdAt: 3393.49,
      id: "<id>",
      name: "<value>",
      ref: "<value>",
    },
    state: "Ohio",
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
| `project`                                                                    | [models.UserEventPayload131Project](../models/usereventpayload131project.md) | :heavy_check_mark:                                                           | N/A                                                                          |