# OneHundredAndSix

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSix } from "@vercel/sdk/models/jobprovider.js";

let value: OneHundredAndSix = {
  name: "<value>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `oldTeam`                                                                    | [models.UserEventPayload106OldTeam](../models/usereventpayload106oldteam.md) | :heavy_minus_sign:                                                           | N/A                                                                          |
| `newTeam`                                                                    | [models.UserEventPayload106NewTeam](../models/usereventpayload106newteam.md) | :heavy_minus_sign:                                                           | N/A                                                                          |