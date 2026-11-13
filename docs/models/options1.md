# Options1

Restart-cycle purchase options

## Example Usage

```typescript
import { Options1 } from "@vercel/sdk/models/buycreditsop.js";

let value: Options1 = {
  planId: "<id>",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `fromPlan`                                                                  | [models.BuyCreditsOptionsFromPlan](../models/buycreditsoptionsfromplan.md)  | :heavy_minus_sign:                                                          | The current plan being replaced by this purchase                            |
| `planId`                                                                    | *string*                                                                    | :heavy_check_mark:                                                          | The ID of the plan to subscribe to                                          |
| `planItemPrices`                                                            | [models.PlanItemPrices](../models/planitemprices.md)[]                      | :heavy_minus_sign:                                                          | The plan item prices to set for the subscription, independent of quantities |
| `planItemQuantities`                                                        | [models.PlanItemQuantities](../models/planitemquantities.md)[]              | :heavy_minus_sign:                                                          | The plan item quantities to set for the subscription                        |
| `rateVariantKey`                                                            | *string*                                                                    | :heavy_minus_sign:                                                          | The rate variant key to apply to the subscription                           |
| `transition`                                                                | [models.Transition](../models/transition.md)                                | :heavy_minus_sign:                                                          | Replacement billing-cycle policy. Defaults to restart_cycle.                |