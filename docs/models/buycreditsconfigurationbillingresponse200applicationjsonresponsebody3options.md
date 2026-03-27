# BuyCreditsConfigurationBillingResponse200ApplicationJSONResponseBody3Options

Configuration input options for decreasing plan item quantity.

## Example Usage

```typescript
import { BuyCreditsConfigurationBillingResponse200ApplicationJSONResponseBody3Options } from "@vercel/sdk/models/buycreditsop.js";

let value:
  BuyCreditsConfigurationBillingResponse200ApplicationJSONResponseBody3Options =
    {
      productAlias: "<value>",
      resourceIds: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
    };
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `productAlias`                                                                                                           | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The alias of the product to decrease quantity for.                                                                       |
| `resourceIds`                                                                                                            | *string*[]                                                                                                               | :heavy_check_mark:                                                                                                       | The resource IDs to decrementally remove. The quantity of the plan item will be decreased by the number of resource IDs. |