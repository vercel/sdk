# BuyCreditsConfiguration1

Configuration for the Orb subscription intent.

## Example Usage

```typescript
import { BuyCreditsConfiguration1 } from "@vercel/sdk/models/buycreditsop.js";

let value: BuyCreditsConfiguration1 = {
  options: {
    productAlias: "<value>",
    quantity: 333.08,
  },
  output: {
    orbPriceId: "<id>",
    productId: "<id>",
  },
  type: "set_plan_item_quantity",
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                              | [models.BuyCreditsConfigurationBillingResponse200ApplicationJSONOptions](../models/buycreditsconfigurationbillingresponse200applicationjsonoptions.md) | :heavy_check_mark:                                                                                                                                     | Configuration input options for setting plan item quantity.                                                                                            |
| `output`                                                                                                                                               | [models.BuyCreditsConfigurationBillingResponseOutput](../models/buycreditsconfigurationbillingresponseoutput.md)                                       | :heavy_check_mark:                                                                                                                                     | Output returned after configuring an OrbSubscriptionIntent.                                                                                            |
| `type`                                                                                                                                                 | *"set_plan_item_quantity"*                                                                                                                             | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |