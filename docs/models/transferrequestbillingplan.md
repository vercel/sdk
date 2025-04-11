# TransferRequestBillingPlan

## Example Usage

```typescript
import { TransferRequestBillingPlan } from "@vercel/sdk/models/getconfigurationop.js";

let value: TransferRequestBillingPlan = {
  id: "<id>",
  type: "prepayment",
  name: "<value>",
  description: "apprehensive where as fisherman fiddle",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `id`                                                             | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `type`                                                           | [models.TransferRequestType](../models/transferrequesttype.md)   | :heavy_check_mark:                                               | N/A                                                              |
| `scope`                                                          | [models.TransferRequestScope](../models/transferrequestscope.md) | :heavy_minus_sign:                                               | N/A                                                              |
| `name`                                                           | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `description`                                                    | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `paymentMethodRequired`                                          | *boolean*                                                        | :heavy_minus_sign:                                               | N/A                                                              |
| `preauthorizationAmount`                                         | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              |