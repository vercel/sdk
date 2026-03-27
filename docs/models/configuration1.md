# Configuration1

The configuration for a credit purchase

## Example Usage

```typescript
import { Configuration1 } from "@vercel/sdk/models/buycreditsop.js";

let value: Configuration1 = {
  options: {
    amount: "491.18",
    currency: "vercel_agent_credits",
  },
  output: "<value>",
  type: "credit_topup",
};
```

## Fields

| Field                                                                                                                                                                            | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `options`                                                                                                                                                                        | [models.BuyCreditsConfigurationBillingResponse200ApplicationJSONResponseBody2Options](../models/buycreditsconfigurationbillingresponse200applicationjsonresponsebody2options.md) | :heavy_check_mark:                                                                                                                                                               | Purchase configuration specific options                                                                                                                                          |
| `output`                                                                                                                                                                         | *any*                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                               | N/A                                                                                                                                                                              |
| `type`                                                                                                                                                                           | *"credit_topup"*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                               | N/A                                                                                                                                                                              |