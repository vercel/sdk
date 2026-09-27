# NinetyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetyTwo } from "@vercel/sdk/models/fiftyfour.js";

let value: NinetyTwo = {
  configuration: {
    id: "<id>",
  },
  newName: "<value>",
  team: {
    id: "<id>",
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `configuration`                                                                        | [models.UserEventPayload92Configuration](../models/usereventpayload92configuration.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `newName`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `team`                                                                                 | [models.UserEventPayload92Team](../models/usereventpayload92team.md)                   | :heavy_check_mark:                                                                     | N/A                                                                                    |