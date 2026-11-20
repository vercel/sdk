# OneHundredAndFiftyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFiftyOne } from "@vercel/sdk/models/usereventjobpayloaddeployhook.js";

let value: OneHundredAndFiftyOne = {
  name: "<value>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `newTeam`                                                                    | [models.UserEventPayload151NewTeam](../models/usereventpayload151newteam.md) | :heavy_minus_sign:                                                           | N/A                                                                          |
| `oldTeam`                                                                    | [models.UserEventPayload151OldTeam](../models/usereventpayload151oldteam.md) | :heavy_minus_sign:                                                           | N/A                                                                          |