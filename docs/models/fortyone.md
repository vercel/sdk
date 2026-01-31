# FortyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { FortyOne } from "@vercel/sdk/models/userevent.js";

let value: FortyOne = {
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
| `team`                                                                                 | [models.UserEventPayload41Team](../models/usereventpayload41team.md)                   | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `configuration`                                                                        | [models.UserEventPayload41Configuration](../models/usereventpayload41configuration.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `newName`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |