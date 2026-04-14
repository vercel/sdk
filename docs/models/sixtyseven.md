# SixtySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { SixtySeven } from "@vercel/sdk/models/fiftyone.js";

let value: SixtySeven = {
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
    state: "Nevada",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `project`                                                                  | [models.UserEventPayload67Project](../models/usereventpayload67project.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `job`                                                                      | [models.Job](../models/job.md)                                             | :heavy_check_mark:                                                         | N/A                                                                        |