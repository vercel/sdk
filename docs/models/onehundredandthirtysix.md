# OneHundredAndThirtySix

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndThirtySix } from "@vercel/sdk/models/eightythree.js";

let value: OneHundredAndThirtySix = {
  job: {
    deployHook: {
      createdAt: 3393.49,
      id: "<id>",
      name: "<value>",
      ref: "<value>",
    },
    state: "Arizona",
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
| `project`                                                                    | [models.UserEventPayload136Project](../models/usereventpayload136project.md) | :heavy_check_mark:                                                           | N/A                                                                          |