# BuyCreditsConfigurationBillingResponse200ApplicationJSONOptions

Purchase configuration specific options

## Example Usage

```typescript
import { BuyCreditsConfigurationBillingResponse200ApplicationJSONOptions } from "@vercel/sdk/models/buycreditsop.js";

let value: BuyCreditsConfigurationBillingResponse200ApplicationJSONOptions = {
  planId: "<id>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `planId`                                                       | *string*                                                       | :heavy_check_mark:                                             | The ID of the plan to subscribe to                             |
| `planItemQuantities`                                           | [models.PlanItemQuantities](../models/planitemquantities.md)[] | :heavy_minus_sign:                                             | The plan item quantities to set for the subscription           |
| `rateVariantKey`                                               | *string*                                                       | :heavy_minus_sign:                                             | The rate variant key to apply to the subscription              |