# SixtyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { SixtyFive } from "@vercel/sdk/models/fortyseven.js";

let value: SixtyFive = {
  team: {
    id: "<id>",
    name: "<value>",
  },
  configuration: {
    id: "<id>",
  },
  newName: "<value>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `team`                                                                                 | [models.UserEventPayload65Team](../models/usereventpayload65team.md)                   | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `configuration`                                                                        | [models.UserEventPayload65Configuration](../models/usereventpayload65configuration.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `newName`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |