# NinetyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetyThree } from "@vercel/sdk/models/ninetytwo.js";

let value: NinetyThree = {
  project: {
    id: "<id>",
    name: "<value>",
  },
  purchasedAmount: 2397.72,
  prevPurchasedAmount: 9297.42,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `project`                                                                  | [models.UserEventPayload93Project](../models/usereventpayload93project.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `purchasedAmount`                                                          | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `prevPurchasedAmount`                                                      | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |