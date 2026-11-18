# OneHundredAndFifty

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFifty } from "@vercel/sdk/models/job2.js";

let value: OneHundredAndFifty = {
  name: "<value>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `newTeam`                                                                    | [models.UserEventPayload150NewTeam](../models/usereventpayload150newteam.md) | :heavy_minus_sign:                                                           | N/A                                                                          |
| `oldTeam`                                                                    | [models.UserEventPayload150OldTeam](../models/usereventpayload150oldteam.md) | :heavy_minus_sign:                                                           | N/A                                                                          |