# BuyCreditsConfigurationBillingResponse200ApplicationJSONResponseBodyOptions

Configuration input options for increasing plan item quantity.

## Example Usage

```typescript
import { BuyCreditsConfigurationBillingResponse200ApplicationJSONResponseBodyOptions } from "@vercel/sdk/models/buycreditsop.js";

let value:
  BuyCreditsConfigurationBillingResponse200ApplicationJSONResponseBodyOptions =
    {
      productAlias: "<value>",
      resourceIds: [
        "<value 1>",
        "<value 2>",
      ],
    };
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `productAlias`                                                                                                        | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | The alias of the product to increase quantity for.                                                                    |
| `resourceIds`                                                                                                         | *string*[]                                                                                                            | :heavy_check_mark:                                                                                                    | The resource IDs to incrementally add. The quantity of the plan item will be increased by the number of resource IDs. |