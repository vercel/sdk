# BuyCreditsConfigurationBillingResponse200ApplicationJSONResponseBody2Options

Purchase configuration specific options

## Example Usage

```typescript
import { BuyCreditsConfigurationBillingResponse200ApplicationJSONResponseBody2Options } from "@vercel/sdk/models/buycreditsop.js";

let value:
  BuyCreditsConfigurationBillingResponse200ApplicationJSONResponseBody2Options =
    {
      amount: "777.34",
      currency: "ai_gateway_credits",
    };
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `amount`                                                           | *string*                                                           | :heavy_check_mark:                                                 | The amount of currency to buy                                      |
| `currency`                                                         | [models.ConfigurationCurrency](../models/configurationcurrency.md) | :heavy_check_mark:                                                 | The currency being purchased                                       |
| `expirationDate`                                                   | *string*                                                           | :heavy_minus_sign:                                                 | The expiration date of the credits being purchased                 |