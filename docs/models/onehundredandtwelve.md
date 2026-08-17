# OneHundredAndTwelve

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTwelve } from "@vercel/sdk/models/usereventpayload80configuration.js";

let value: OneHundredAndTwelve = {
  name: "<value>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `oldTeam`                                                                    | [models.UserEventPayload112OldTeam](../models/usereventpayload112oldteam.md) | :heavy_minus_sign:                                                           | N/A                                                                          |
| `newTeam`                                                                    | [models.UserEventPayload112NewTeam](../models/usereventpayload112newteam.md) | :heavy_minus_sign:                                                           | N/A                                                                          |