# ImportResourceBillingPlan

## Example Usage

```typescript
import { ImportResourceBillingPlan } from "@vercel/sdk/models/importresourceop.js";

let value: ImportResourceBillingPlan = {
  id: "<id>",
  type: "subscription",
  name: "<value>",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `type`                                                                                     | [models.ImportResourceType](../models/importresourcetype.md)                               | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `name`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `description`                                                                              | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `paymentMethodRequired`                                                                    | *boolean*                                                                                  | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `cost`                                                                                     | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `details`                                                                                  | [models.ImportResourceDetails](../models/importresourcedetails.md)[]                       | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `highlightedDetails`                                                                       | [models.ImportResourceHighlightedDetails](../models/importresourcehighlighteddetails.md)[] | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `effectiveDate`                                                                            | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `additionalProperties`                                                                     | Record<string, *any*>                                                                      | :heavy_minus_sign:                                                                         | N/A                                                                                        |