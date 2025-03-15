# ThirtySix

The payload of the event, if requested.

## Example Usage

```typescript
import { ThirtySix } from "@vercel/sdk/models/userevent.js";

let value: ThirtySix = {
  project: {
    name: "<value>",
  },
  job: {
    deployHook: {
      createdAt: 5265.84,
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
| `project`                                                                  | [models.UserEventPayload36Project](../models/usereventpayload36project.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `job`                                                                      | [models.Job](../models/job.md)                                             | :heavy_check_mark:                                                         | N/A                                                                        |