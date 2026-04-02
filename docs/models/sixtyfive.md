# SixtyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { SixtyFive } from "@vercel/sdk/models/usereventpayloadproject.js";

let value: SixtyFive = {
  project: {
    name: "<value>",
  },
  job: {
    deployHook: {
      createdAt: 3393.49,
      id: "<id>",
      name: "<value>",
      ref: "<value>",
    },
    state: "Montana",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `project`                                                                  | [models.UserEventPayload65Project](../models/usereventpayload65project.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `job`                                                                      | [models.Job](../models/job.md)                                             | :heavy_check_mark:                                                         | N/A                                                                        |