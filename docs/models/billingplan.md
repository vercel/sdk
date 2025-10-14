# BillingPlan

## Example Usage

```typescript
import { BillingPlan } from "@vercel/sdk/models/updateinstallationop.js";

let value: BillingPlan = {
  id: "<id>",
  type: "prepayment",
  name: "<value>",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `id`                                                                 | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `type`                                                               | [models.UpdateInstallationType](../models/updateinstallationtype.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `name`                                                               | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `description`                                                        | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `paymentMethodRequired`                                              | *boolean*                                                            | :heavy_minus_sign:                                                   | N/A                                                                  |
| `cost`                                                               | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `details`                                                            | [models.Details](../models/details.md)[]                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `highlightedDetails`                                                 | [models.HighlightedDetails](../models/highlighteddetails.md)[]       | :heavy_minus_sign:                                                   | N/A                                                                  |
| `effectiveDate`                                                      | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `additionalProperties`                                               | Record<string, *any*>                                                | :heavy_minus_sign:                                                   | N/A                                                                  |