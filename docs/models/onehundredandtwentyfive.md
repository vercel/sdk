# OneHundredAndTwentyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTwentyFive } from "@vercel/sdk/models/eightytwo.js";

let value: OneHundredAndTwentyFive = {
  prevPurchasedAmount: 3414,
  project: {
    id: "<id>",
    name: "<value>",
  },
  purchasedAmount: 1765.07,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `prevPurchasedAmount`                                                        | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `project`                                                                    | [models.UserEventPayload125Project](../models/usereventpayload125project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `purchasedAmount`                                                            | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |