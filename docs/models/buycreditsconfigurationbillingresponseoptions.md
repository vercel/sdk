# BuyCreditsConfigurationBillingResponseOptions

## Example Usage

```typescript
import { BuyCreditsConfigurationBillingResponseOptions } from "@vercel/sdk/models/buycreditsop.js";

let value: BuyCreditsConfigurationBillingResponseOptions = {
  externalPlanId: "<id>",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `externalPlanId`                                                                      | *string*                                                                              | :heavy_check_mark:                                                                    | The external plan ID of the Orb plan to subscribe to                                  |
| `addPrices`                                                                           | *models.AddPrices*[]                                                                  | :heavy_minus_sign:                                                                    | The prices to add to the subscription                                                 |
| `alignBillingWithSubscriptionStartDate`                                               | *boolean*                                                                             | :heavy_minus_sign:                                                                    | Whether to align the subscription start date with the billing subscription start date |
| `couponRedemptionCode`                                                                | *string*                                                                              | :heavy_minus_sign:                                                                    | The coupon redemption code to apply to the subscription                               |
| `initialPhaseOrder`                                                                   | *number*                                                                              | :heavy_minus_sign:                                                                    | The initial phase order to use for the subscription                                   |
| `metadata`                                                                            | Record<string, *string*>                                                              | :heavy_minus_sign:                                                                    | Optional metadata to associate with the subscription                                  |
| `removePrices`                                                                        | [models.RemovePrices](../models/removeprices.md)[]                                    | :heavy_minus_sign:                                                                    | The prices to remove in the subscription                                              |
| `replacePrices`                                                                       | [models.ConfigurationReplacePrices](../models/configurationreplaceprices.md)[]        | :heavy_minus_sign:                                                                    | The prices to replace in the subscription                                             |
| `startDate`                                                                           | *string*                                                                              | :heavy_minus_sign:                                                                    | The start date of the subscription                                                    |