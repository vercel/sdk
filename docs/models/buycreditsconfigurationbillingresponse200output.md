# BuyCreditsConfigurationBillingResponse200Output

Output returned after configuring an OrbSubscriptionIntent.

## Example Usage

```typescript
import { BuyCreditsConfigurationBillingResponse200Output } from "@vercel/sdk/models/buycreditsop.js";

let value: BuyCreditsConfigurationBillingResponse200Output = {
  orbPriceId: "<id>",
  productId: "<id>",
};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `orbPriceId`                                                                                                                      | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | The Orb price ID for the subscription item being modified.                                                                        |
| `productId`                                                                                                                       | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | The product ID associated with this intent.                                                                                       |
| `changedResources`                                                                                                                | *models.ConfigurationChangedResources*[]                                                                                          | :heavy_minus_sign:                                                                                                                | Resources that were changed as part of this intent. Tracks all logical changes including the primary change and any side effects. |
| `metadata`                                                                                                                        | Record<string, *string*>                                                                                                          | :heavy_minus_sign:                                                                                                                | Optional metadata associated with the intent to update the Orb subscription with.                                                 |
| `pendingSubscriptionChangeId`                                                                                                     | *string*                                                                                                                          | :heavy_minus_sign:                                                                                                                | The ID of the pending subscription change if there is one.                                                                        |