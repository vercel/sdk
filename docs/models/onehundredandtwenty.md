# OneHundredAndTwenty

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTwenty } from "@vercel/sdk/models/deployhook.js";

let value: OneHundredAndTwenty = {
  name: "<value>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `newTeam`                                                                    | [models.UserEventPayload120NewTeam](../models/usereventpayload120newteam.md) | :heavy_minus_sign:                                                           | N/A                                                                          |
| `oldTeam`                                                                    | [models.UserEventPayload120OldTeam](../models/usereventpayload120oldteam.md) | :heavy_minus_sign:                                                           | N/A                                                                          |