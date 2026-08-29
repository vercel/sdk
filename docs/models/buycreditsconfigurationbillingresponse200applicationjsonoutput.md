# BuyCreditsConfigurationBillingResponse200ApplicationJSONOutput

Output returned after configuring an OrbSubscriptionIntent.

## Example Usage

```typescript
import { BuyCreditsConfigurationBillingResponse200ApplicationJSONOutput } from "@vercel/sdk/models/buycreditsop.js";

let value: BuyCreditsConfigurationBillingResponse200ApplicationJSONOutput = {
  effectiveBehavior: "immediate",
  orbPriceId: "<id>",
  pricingSource: "orb",
  productId: "<id>",
};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `effectiveBehavior`                                                                                                               | [models.ConfigurationEffectiveBehavior](../models/configurationeffectivebehavior.md)                                              | :heavy_check_mark:                                                                                                                | When the subscription change should take effect.                                                                                  |
| `orbPriceId`                                                                                                                      | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | The Orb price ID for the subscription item being modified.                                                                        |
| `pricingSource`                                                                                                                   | [models.ConfigurationPricingSource](../models/configurationpricingsource.md)                                                      | :heavy_check_mark:                                                                                                                | The source used as the authoritative price for this intent.                                                                       |
| `productId`                                                                                                                       | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | The product ID associated with this intent.                                                                                       |
| `changedResources`                                                                                                                | [models.ConfigurationChangedResources](../models/configurationchangedresources.md)[]                                              | :heavy_minus_sign:                                                                                                                | Resources that were changed as part of this intent. Tracks all logical changes including the primary change and any side effects. |
| `metadata`                                                                                                                        | Record<string, *string*>                                                                                                          | :heavy_minus_sign:                                                                                                                | Optional metadata associated with the intent to update the Orb subscription with.                                                 |
| `pendingSubscriptionChangeId`                                                                                                     | *string*                                                                                                                          | :heavy_minus_sign:                                                                                                                | The ID of the pending subscription change if there is one.                                                                        |