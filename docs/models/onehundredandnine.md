# OneHundredAndNine

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndNine } from "@vercel/sdk/models/after.js";

let value: OneHundredAndNine = {
  prevPurchasedAmount: 6865.5,
  project: {
    id: "<id>",
    name: "<value>",
  },
  purchasedAmount: 9937.79,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `prevPurchasedAmount`                                                        | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `project`                                                                    | [models.UserEventPayload109Project](../models/usereventpayload109project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `purchasedAmount`                                                            | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |