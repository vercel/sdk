# OneHundredAndTwentyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTwentyTwo } from "@vercel/sdk/models/allowlistedreadystatereasoninternal.js";

let value: OneHundredAndTwentyTwo = {
  prevPurchasedAmount: 7446.88,
  project: {
    id: "<id>",
    name: "<value>",
  },
  purchasedAmount: 412.1,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `prevPurchasedAmount`                                                        | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `project`                                                                    | [models.UserEventPayload122Project](../models/usereventpayload122project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `purchasedAmount`                                                            | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |