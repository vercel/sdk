# OneHundredAndThirteen

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndThirteen } from "@vercel/sdk/models/data2.js";

let value: OneHundredAndThirteen = {
  prevPurchasedAmount: 762.26,
  project: {
    id: "<id>",
    name: "<value>",
  },
  purchasedAmount: 3940.4,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `prevPurchasedAmount`                                                        | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `project`                                                                    | [models.UserEventPayload113Project](../models/usereventpayload113project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `purchasedAmount`                                                            | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |