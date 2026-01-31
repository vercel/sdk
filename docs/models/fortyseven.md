# FortySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { FortySeven } from "@vercel/sdk/models/userevent.js";

let value: FortySeven = {
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
    state: "Connecticut",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `project`                                                                  | [models.UserEventPayload47Project](../models/usereventpayload47project.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `job`                                                                      | [models.Job](../models/job.md)                                             | :heavy_check_mark:                                                         | N/A                                                                        |