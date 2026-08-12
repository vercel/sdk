# EightyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { EightyNine } from "@vercel/sdk/models/sixty.js";

let value: EightyNine = {
  project: {
    id: "<id>",
    name: "<value>",
  },
  purchasedAmount: 3127.76,
  prevPurchasedAmount: 1187.16,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `project`                                                                  | [models.UserEventPayload89Project](../models/usereventpayload89project.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `purchasedAmount`                                                          | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `prevPurchasedAmount`                                                      | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |