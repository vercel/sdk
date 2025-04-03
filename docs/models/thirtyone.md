# ThirtyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { ThirtyOne } from "@vercel/sdk/models/userevent.js";

let value: ThirtyOne = {
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

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `team`                                                                             | [models.UserEventPayloadTeam](../models/usereventpayloadteam.md)                   | :heavy_check_mark:                                                                 | N/A                                                                                |
| `configuration`                                                                    | [models.UserEventPayloadConfiguration](../models/usereventpayloadconfiguration.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `project`                                                                          | [models.UserEventPayload31Project](../models/usereventpayload31project.md)         | :heavy_check_mark:                                                                 | N/A                                                                                |