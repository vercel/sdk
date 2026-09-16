# TransferRequestBillingPlan

## Example Usage

```typescript
import { TransferRequestBillingPlan } from "@vercel/sdk/models/getconfigurationop.js";

let value: TransferRequestBillingPlan = {
  description:
    "word bravely needily under presell legal coaxingly except napkin rotten",
  id: "<id>",
  name: "<value>",
  type: "subscription",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `description`                                                    | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `id`                                                             | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `name`                                                           | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `paymentMethodRequired`                                          | *boolean*                                                        | :heavy_minus_sign:                                               | N/A                                                              |
| `preauthorizationAmount`                                         | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `scope`                                                          | [models.TransferRequestScope](../models/transferrequestscope.md) | :heavy_minus_sign:                                               | N/A                                                              |
| `type`                                                           | [models.TransferRequestType](../models/transferrequesttype.md)   | :heavy_check_mark:                                               | N/A                                                              |