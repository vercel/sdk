# SeventyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { SeventyNine } from "@vercel/sdk/models/fortyfour.js";

let value: SeventyNine = {
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
| `team`                                                                                 | [models.UserEventPayload79Team](../models/usereventpayload79team.md)                   | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `configuration`                                                                        | [models.UserEventPayload79Configuration](../models/usereventpayload79configuration.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `newName`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |