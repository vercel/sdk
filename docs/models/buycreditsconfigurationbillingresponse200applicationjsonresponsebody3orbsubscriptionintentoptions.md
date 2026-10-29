# BuyCreditsConfigurationBillingResponse200ApplicationJSONResponseBody3OrbSubscriptionIntentOptions

Configuration input options for increasing plan item quantity.

## Example Usage

```typescript
import {
  BuyCreditsConfigurationBillingResponse200ApplicationJSONResponseBody3OrbSubscriptionIntentOptions,
} from "@vercel/sdk/models/buycreditsop.js";

let value:
  BuyCreditsConfigurationBillingResponse200ApplicationJSONResponseBody3OrbSubscriptionIntentOptions =
    {
      productAlias: "<value>",
      resourceIds: [],
    };
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `productAlias`                                                                                                        | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | The alias of the product to increase quantity for.                                                                    |
| `resourceIds`                                                                                                         | *string*[]                                                                                                            | :heavy_check_mark:                                                                                                    | The resource IDs to incrementally add. The quantity of the plan item will be increased by the number of resource IDs. |