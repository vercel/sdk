# FortyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { FortyEight } from "@vercel/sdk/models/userevent.js";

let value: FortyEight = {
  name: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `name`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `oldTeam`                                                                  | [models.UserEventPayload48OldTeam](../models/usereventpayload48oldteam.md) | :heavy_minus_sign:                                                         | N/A                                                                        |
| `newTeam`                                                                  | [models.UserEventPayload48NewTeam](../models/usereventpayload48newteam.md) | :heavy_minus_sign:                                                         | N/A                                                                        |