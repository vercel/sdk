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
    effectiveBehavior: "end_of_term",
    orbPriceId: "<id>",
    pricingSource: "copper",
    productId: "<id>",
  },
  type: "set_plan_item_quantity",
};
```

## Fields

| Field                                                                                                                                                                          | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | [models.BuyCreditsConfigurationBillingResponse200ApplicationJSONResponseBodyOptions](../models/buycreditsconfigurationbillingresponse200applicationjsonresponsebodyoptions.md) | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `output`                                                                                                                                                                       | [models.BuyCreditsConfigurationBillingResponse200Output](../models/buycreditsconfigurationbillingresponse200output.md)                                                         | :heavy_check_mark:                                                                                                                                                             | Output returned after configuring an OrbSubscriptionIntent.                                                                                                                    |
| `type`                                                                                                                                                                         | [models.BuyCreditsConfigurationBillingResponse200ApplicationJSONResponseBody3Type](../models/buycreditsconfigurationbillingresponse200applicationjsonresponsebody3type.md)     | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |