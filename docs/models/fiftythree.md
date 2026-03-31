# FiftyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { FiftyThree } from "@vercel/sdk/models/forty.js";

let value: FiftyThree = {
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
| `team`                                                                                 | [models.UserEventPayload53Team](../models/usereventpayload53team.md)                   | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `configuration`                                                                        | [models.UserEventPayload53Configuration](../models/usereventpayload53configuration.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `newName`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |