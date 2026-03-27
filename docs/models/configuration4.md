# Configuration4

Configuration for the Orb subscription intent.

## Example Usage

```typescript
import { Configuration4 } from "@vercel/sdk/models/buycreditsop.js";

let value: Configuration4 = {
  options: {
    addedResourceIds: [
      "<value 1>",
      "<value 2>",
    ],
    productAlias: "<value>",
    removedResourceIds: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  output: {
    orbPriceId: "<id>",
    productId: "<id>",
  },
  type: "adjust_plan_item_quantity",
};
```

## Fields

| Field                                                                                                                                                                                                                      | Type                                                                                                                                                                                                                       | Required                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `options`                                                                                                                                                                                                                  | [models.BuyCreditsConfigurationBillingResponse200ApplicationJSONResponseBody3OrbSubscriptionIntentOptions](../models/buycreditsconfigurationbillingresponse200applicationjsonresponsebody3orbsubscriptionintentoptions.md) | :heavy_check_mark:                                                                                                                                                                                                         | Configuration input options for adjusting plan item quantity.                                                                                                                                                              |
| `output`                                                                                                                                                                                                                   | [models.BuyCreditsConfigurationBillingResponse200ApplicationJSONResponseBodyOutput](../models/buycreditsconfigurationbillingresponse200applicationjsonresponsebodyoutput.md)                                               | :heavy_check_mark:                                                                                                                                                                                                         | Output returned after configuring an OrbSubscriptionIntent.                                                                                                                                                                |
| `type`                                                                                                                                                                                                                     | *"adjust_plan_item_quantity"*                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                         | N/A                                                                                                                                                                                                                        |