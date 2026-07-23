# EightyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { EightyFive } from "@vercel/sdk/models/nineteen.js";

let value: EightyFive = {
  project: {
    id: "<id>",
    name: "<value>",
  },
  purchasedAmount: 5280.07,
  prevPurchasedAmount: 2405.52,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `project`                                                                  | [models.UserEventPayload85Project](../models/usereventpayload85project.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `purchasedAmount`                                                          | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `prevPurchasedAmount`                                                      | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |