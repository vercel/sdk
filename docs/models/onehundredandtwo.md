# OneHundredAndTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTwo } from "@vercel/sdk/models/eightytwo.js";

let value: OneHundredAndTwo = {
  configuration: {
    id: "<id>",
  },
  project: {
    id: "<id>",
  },
  team: {
    id: "<id>",
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `configuration`                                                                          | [models.UserEventPayload102Configuration](../models/usereventpayload102configuration.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `project`                                                                                | [models.UserEventPayload102Project](../models/usereventpayload102project.md)             | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `team`                                                                                   | [models.UserEventPayloadTeam](../models/usereventpayloadteam.md)                         | :heavy_check_mark:                                                                       | N/A                                                                                      |