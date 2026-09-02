# NinetyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetyFive } from "@vercel/sdk/models/ceilingmode.js";

let value: NinetyFive = {
  project: {
    id: "<id>",
    name: "<value>",
  },
  purchasedAmount: 7567.04,
  prevPurchasedAmount: 5098.84,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `project`                                                                  | [models.UserEventPayload95Project](../models/usereventpayload95project.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `purchasedAmount`                                                          | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `prevPurchasedAmount`                                                      | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |