# SixtyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { SixtyFour } from "@vercel/sdk/models/payloadproject.js";

let value: SixtyFour = {
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
    state: "Vermont",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `project`                                                                  | [models.UserEventPayload64Project](../models/usereventpayload64project.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `job`                                                                      | [models.Job](../models/job.md)                                             | :heavy_check_mark:                                                         | N/A                                                                        |