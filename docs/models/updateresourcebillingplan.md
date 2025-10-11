# UpdateResourceBillingPlan

## Example Usage

```typescript
import { UpdateResourceBillingPlan } from "@vercel/sdk/models/updateresourceop.js";

let value: UpdateResourceBillingPlan = {
  id: "<id>",
  type: "prepayment",
  name: "<value>",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `type`                                                                                     | [models.UpdateResourceType](../models/updateresourcetype.md)                               | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `name`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `description`                                                                              | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `paymentMethodRequired`                                                                    | *boolean*                                                                                  | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `cost`                                                                                     | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `details`                                                                                  | [models.UpdateResourceDetails](../models/updateresourcedetails.md)[]                       | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `highlightedDetails`                                                                       | [models.UpdateResourceHighlightedDetails](../models/updateresourcehighlighteddetails.md)[] | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `effectiveDate`                                                                            | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `additionalProperties`                                                                     | Record<string, *any*>                                                                      | :heavy_minus_sign:                                                                         | N/A                                                                                        |