# OneHundredAndTwentyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTwentyFive } from "@vercel/sdk/models/usereventjobaction.js";

let value: OneHundredAndTwentyFive = {
  name: "<value>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `newTeam`                                                                    | [models.UserEventPayload125NewTeam](../models/usereventpayload125newteam.md) | :heavy_minus_sign:                                                           | N/A                                                                          |
| `oldTeam`                                                                    | [models.UserEventPayload125OldTeam](../models/usereventpayload125oldteam.md) | :heavy_minus_sign:                                                           | N/A                                                                          |