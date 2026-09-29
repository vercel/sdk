# BuyCreditsConfiguration4

Configuration for the Orb subscription intent.

## Example Usage

```typescript
import { BuyCreditsConfiguration4 } from "@vercel/sdk/models/buycreditsop.js";

let value: BuyCreditsConfiguration4 = {
  options: {
    addedResourceIds: [],
    productAlias: "<value>",
    removedResourceIds: [],
  },
  output: {
    effectiveBehavior: "immediate",
    orbPriceId: "<id>",
    pricingSource: "orb",
    productId: "<id>",
  },
  type: "adjust_plan_item_quantity",
};
```

## Fields

| Field                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `options`                                                                                                                                                                                                                    | [models.BuyCreditsConfigurationBillingResponse200ApplicationJSONResponseBody3OrbSubscriptionIntent4Options](../models/buycreditsconfigurationbillingresponse200applicationjsonresponsebody3orbsubscriptionintent4options.md) | :heavy_check_mark:                                                                                                                                                                                                           | Configuration input options for adjusting plan item quantity.                                                                                                                                                                |
| `output`                                                                                                                                                                                                                     | [models.BuyCreditsConfigurationBillingResponse200ApplicationJSONResponseBody3Output](../models/buycreditsconfigurationbillingresponse200applicationjsonresponsebody3output.md)                                               | :heavy_check_mark:                                                                                                                                                                                                           | Output returned after configuring an OrbSubscriptionIntent.                                                                                                                                                                  |
| `type`                                                                                                                                                                                                                       | *"adjust_plan_item_quantity"*                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |