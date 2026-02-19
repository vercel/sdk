# SixtyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { SixtyTwo } from "@vercel/sdk/models/userevent.js";

let value: SixtyTwo = {
  name: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `name`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `oldTeam`                                                                  | [models.UserEventPayload62OldTeam](../models/usereventpayload62oldteam.md) | :heavy_minus_sign:                                                         | N/A                                                                        |
| `newTeam`                                                                  | [models.UserEventPayload62NewTeam](../models/usereventpayload62newteam.md) | :heavy_minus_sign:                                                         | N/A                                                                        |