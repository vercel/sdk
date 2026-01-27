# FiftyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { FiftyFour } from "@vercel/sdk/models/userevent.js";

let value: FiftyFour = {
  name: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `name`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `oldTeam`                                                                  | [models.UserEventPayload54OldTeam](../models/usereventpayload54oldteam.md) | :heavy_minus_sign:                                                         | N/A                                                                        |
| `newTeam`                                                                  | [models.UserEventPayload54NewTeam](../models/usereventpayload54newteam.md) | :heavy_minus_sign:                                                         | N/A                                                                        |