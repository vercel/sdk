# FortySix

The payload of the event, if requested.

## Example Usage

```typescript
import { FortySix } from "@vercel/sdk/models/userevent.js";

let value: FortySix = {
  name: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `name`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `oldTeam`                                                                  | [models.UserEventPayload46OldTeam](../models/usereventpayload46oldteam.md) | :heavy_minus_sign:                                                         | N/A                                                                        |
| `newTeam`                                                                  | [models.UserEventPayload46NewTeam](../models/usereventpayload46newteam.md) | :heavy_minus_sign:                                                         | N/A                                                                        |