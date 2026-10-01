# OneHundredAndThirty

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndThirty } from "@vercel/sdk/models/job4.js";

let value: OneHundredAndThirty = {
  name: "<value>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `newTeam`                                                                    | [models.UserEventPayload130NewTeam](../models/usereventpayload130newteam.md) | :heavy_minus_sign:                                                           | N/A                                                                          |
| `oldTeam`                                                                    | [models.UserEventPayload130OldTeam](../models/usereventpayload130oldteam.md) | :heavy_minus_sign:                                                           | N/A                                                                          |