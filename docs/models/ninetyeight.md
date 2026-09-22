# NinetyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetyEight } from "@vercel/sdk/models/usereventpayloadaccessgroup.js";

let value: NinetyEight = {
  prevPurchasedAmount: 9632.55,
  project: {
    id: "<id>",
    name: "<value>",
  },
  purchasedAmount: 6804.15,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `prevPurchasedAmount`                                                      | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `project`                                                                  | [models.UserEventPayload98Project](../models/usereventpayload98project.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `purchasedAmount`                                                          | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |