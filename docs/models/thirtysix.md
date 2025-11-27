# ThirtySix

The payload of the event, if requested.

## Example Usage

```typescript
import { ThirtySix } from "@vercel/sdk/models/userevent.js";

let value: ThirtySix = {
  team: {
    id: "<id>",
    name: "<value>",
  },
  configuration: {
    id: "<id>",
  },
  project: {
    id: "<id>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `team`                                                                     | [models.UserEventPayload36Team](../models/usereventpayload36team.md)       | :heavy_check_mark:                                                         | N/A                                                                        |
| `configuration`                                                            | [models.PayloadConfiguration](../models/payloadconfiguration.md)           | :heavy_check_mark:                                                         | N/A                                                                        |
| `project`                                                                  | [models.UserEventPayload36Project](../models/usereventpayload36project.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `buildsEnabled`                                                            | *boolean*                                                                  | :heavy_minus_sign:                                                         | N/A                                                                        |