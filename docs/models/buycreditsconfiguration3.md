# BuyCreditsConfiguration3

The configuration for a credit purchase

## Example Usage

```typescript
import { BuyCreditsConfiguration3 } from "@vercel/sdk/models/buycreditsop.js";

let value: BuyCreditsConfiguration3 = {
  options: {
    effectiveDate: {},
    orbSubscriptionId: "<id>",
  },
  output: {
    pendingSubscriptionChangeId: "<id>",
  },
  type: "orb_plan_change",
};
```

## Fields

| Field                                                                                                                                                                          | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | [models.BuyCreditsConfigurationOptions](../models/buycreditsconfigurationoptions.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `output`                                                                                                                                                                       | [models.BuyCreditsConfigurationBillingResponse200ApplicationJSONResponseBody2Output](../models/buycreditsconfigurationbillingresponse200applicationjsonresponsebody2output.md) | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `type`                                                                                                                                                                         | *"orb_plan_change"*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |