# NinetyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetyNine } from "@vercel/sdk/models/fiftytwo.js";

let value: NinetyNine = {
  prevPurchasedAmount: 4084.8,
  project: {
    id: "<id>",
    name: "<value>",
  },
  purchasedAmount: 5082.46,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `prevPurchasedAmount`                                                      | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `project`                                                                  | [models.UserEventPayload99Project](../models/usereventpayload99project.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `purchasedAmount`                                                          | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |