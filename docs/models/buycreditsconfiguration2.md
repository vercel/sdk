# BuyCreditsConfiguration2

Configuration for the Orb subscription intent.

## Example Usage

```typescript
import { BuyCreditsConfiguration2 } from "@vercel/sdk/models/buycreditsop.js";

let value: BuyCreditsConfiguration2 = {
  options: {
    productAlias: "<value>",
    resourceIds: [
      "<value 1>",
    ],
  },
  output: {
    orbPriceId: "<id>",
    productId: "<id>",
  },
  type: "increase_plan_item_quantity",
};
```

## Fields

| Field                                                                                                                                                                          | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | [models.BuyCreditsConfigurationBillingResponse200ApplicationJSONResponseBodyOptions](../models/buycreditsconfigurationbillingresponse200applicationjsonresponsebodyoptions.md) | :heavy_check_mark:                                                                                                                                                             | Configuration input options for increasing plan item quantity.                                                                                                                 |
| `output`                                                                                                                                                                       | [models.BuyCreditsConfigurationBillingResponse200Output](../models/buycreditsconfigurationbillingresponse200output.md)                                                         | :heavy_check_mark:                                                                                                                                                             | Output returned after configuring an OrbSubscriptionIntent.                                                                                                                    |
| `type`                                                                                                                                                                         | *"increase_plan_item_quantity"*                                                                                                                                                | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |