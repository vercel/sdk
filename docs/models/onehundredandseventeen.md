# OneHundredAndSeventeen

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSeventeen } from "@vercel/sdk/models/deployhook.js";

let value: OneHundredAndSeventeen = {
  name: "<value>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `oldTeam`                                                                    | [models.UserEventPayload117OldTeam](../models/usereventpayload117oldteam.md) | :heavy_minus_sign:                                                           | N/A                                                                          |
| `newTeam`                                                                    | [models.UserEventPayload117NewTeam](../models/usereventpayload117newteam.md) | :heavy_minus_sign:                                                           | N/A                                                                          |