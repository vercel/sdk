# OneHundredAndThirteen

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndThirteen } from "@vercel/sdk/models/allowlistedreadystatereasoninternal.js";

let value: OneHundredAndThirteen = {
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
| `configuration`                                                                          | [models.UserEventPayload113Configuration](../models/usereventpayload113configuration.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `project`                                                                                | [models.UserEventPayload113Project](../models/usereventpayload113project.md)             | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `team`                                                                                   | [models.UserEventPayloadTeam](../models/usereventpayloadteam.md)                         | :heavy_check_mark:                                                                       | N/A                                                                                      |