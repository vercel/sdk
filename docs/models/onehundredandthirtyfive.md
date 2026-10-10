# OneHundredAndThirtyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndThirtyFive } from "@vercel/sdk/models/usereventjobcommitverification.js";

let value: OneHundredAndThirtyFive = {
  name: "<value>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `newTeam`                                                                    | [models.UserEventPayload135NewTeam](../models/usereventpayload135newteam.md) | :heavy_minus_sign:                                                           | N/A                                                                          |
| `oldTeam`                                                                    | [models.UserEventPayload135OldTeam](../models/usereventpayload135oldteam.md) | :heavy_minus_sign:                                                           | N/A                                                                          |