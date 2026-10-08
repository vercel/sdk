# OneHundredAndSeventeen

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSeventeen } from "@vercel/sdk/models/payloadscopes.js";

let value: OneHundredAndSeventeen = {
  job: {
    deployHook: {
      createdAt: 3393.49,
      id: "<id>",
      name: "<value>",
      ref: "<value>",
    },
    state: "Texas",
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
| `project`                                                                    | [models.UserEventPayload117Project](../models/usereventpayload117project.md) | :heavy_check_mark:                                                           | N/A                                                                          |