# OneHundredAndFourteen

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFourteen } from "@vercel/sdk/models/usereventpayloadteam.js";

let value: OneHundredAndFourteen = {
  name: "<value>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `oldTeam`                                                                    | [models.UserEventPayload114OldTeam](../models/usereventpayload114oldteam.md) | :heavy_minus_sign:                                                           | N/A                                                                          |
| `newTeam`                                                                    | [models.UserEventPayload114NewTeam](../models/usereventpayload114newteam.md) | :heavy_minus_sign:                                                           | N/A                                                                          |