# OneHundredAndTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTwo } from "@vercel/sdk/models/configuration.js";

let value: OneHundredAndTwo = {
  name: "<value>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `oldTeam`                                                                    | [models.UserEventPayload102OldTeam](../models/usereventpayload102oldteam.md) | :heavy_minus_sign:                                                           | N/A                                                                          |
| `newTeam`                                                                    | [models.UserEventPayload102NewTeam](../models/usereventpayload102newteam.md) | :heavy_minus_sign:                                                           | N/A                                                                          |