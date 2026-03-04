# SeventySix

The payload of the event, if requested.

## Example Usage

```typescript
import { SeventySix } from "@vercel/sdk/models/userevent.js";

let value: SeventySix = {
  name: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `name`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `oldTeam`                                                                  | [models.UserEventPayload76OldTeam](../models/usereventpayload76oldteam.md) | :heavy_minus_sign:                                                         | N/A                                                                        |
| `newTeam`                                                                  | [models.UserEventPayload76NewTeam](../models/usereventpayload76newteam.md) | :heavy_minus_sign:                                                         | N/A                                                                        |