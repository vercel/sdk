# BuyCreditsConfigurationOptions

## Example Usage

```typescript
import { BuyCreditsConfigurationOptions } from "@vercel/sdk/models/buycreditsop.js";

let value: BuyCreditsConfigurationOptions = {
  effectiveDate: "end_of_subscription_term",
  orbSubscriptionId: "<id>",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `effectiveDate`                                        | *models.EffectiveDate*                                 | :heavy_check_mark:                                     | N/A                                                    |
| `orbSubscriptionId`                                    | *string*                                               | :heavy_check_mark:                                     | The ID of the Orb subscription to change               |
| `alignBillingWithPlanChangeDate`                       | *boolean*                                              | :heavy_minus_sign:                                     | Whether or not to reset the billing cycle              |
| `couponRedemptionCode`                                 | *string*                                               | :heavy_minus_sign:                                     | The coupon redemption code to apply to the plan change |
| `externalPlanId`                                       | *string*                                               | :heavy_minus_sign:                                     | The ID of the external plan to change to               |
| `replacePrices`                                        | [models.ReplacePrices](../models/replaceprices.md)[]   | :heavy_minus_sign:                                     | The prices to replace in the subscription              |