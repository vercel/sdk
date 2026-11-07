# OneHundredAndSixteen

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixteen } from "@vercel/sdk/models/rule.js";

let value: OneHundredAndSixteen = {
  prevPurchasedAmount: 3966.63,
  project: {
    id: "<id>",
    name: "<value>",
  },
  purchasedAmount: 7998.83,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `prevPurchasedAmount`                                                        | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `project`                                                                    | [models.UserEventPayload116Project](../models/usereventpayload116project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `purchasedAmount`                                                            | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |