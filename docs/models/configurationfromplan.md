# ConfigurationFromPlan

The current plan being replaced by this purchase

## Example Usage

```typescript
import { ConfigurationFromPlan } from "@vercel/sdk/models/buycreditsop.js";

let value: ConfigurationFromPlan = {
  currentCycleEndDate: "<value>",
  orbSubscriptionId: "<id>",
  planId: "<id>",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `additionalSubscriptions`                                                                | [models.AdditionalSubscriptions](../models/additionalsubscriptions.md)[]                 | :heavy_minus_sign:                                                                       | Additional source subscriptions replaced by this purchase                                |
| `currentCycleEndDate`                                                                    | *string*                                                                                 | :heavy_check_mark:                                                                       | The end of the current plan billing cycle                                                |
| `orbSubscriptionId`                                                                      | *string*                                                                                 | :heavy_check_mark:                                                                       | The Orb subscription ID currently active for the owner on the source plan                |
| `planId`                                                                                 | *string*                                                                                 | :heavy_check_mark:                                                                       | The ID of the plan currently assigned                                                    |
| `planItemPrices`                                                                         | [models.ConfigurationPlanItemPrices](../models/configurationplanitemprices.md)[]         | :heavy_minus_sign:                                                                       | The current plan item price overrides                                                    |
| `planItemQuantities`                                                                     | [models.ConfigurationPlanItemQuantities](../models/configurationplanitemquantities.md)[] | :heavy_minus_sign:                                                                       | The current plan item quantities                                                         |
| `rateVariantKey`                                                                         | *string*                                                                                 | :heavy_minus_sign:                                                                       | The rate variant currently assigned                                                      |