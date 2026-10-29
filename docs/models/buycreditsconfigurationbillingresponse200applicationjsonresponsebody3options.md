# BuyCreditsConfigurationBillingResponse200ApplicationJSONResponseBody3Options

Configuration input options for setting plan item quantity.

## Example Usage

```typescript
import { BuyCreditsConfigurationBillingResponse200ApplicationJSONResponseBody3Options } from "@vercel/sdk/models/buycreditsop.js";

let value:
  BuyCreditsConfigurationBillingResponse200ApplicationJSONResponseBody3Options =
    {
      productAlias: "<value>",
      quantity: 7718.09,
      resourceIds: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
    };
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `productAlias`                                | *string*                                      | :heavy_check_mark:                            | The alias of the product to set quantity for. |
| `quantity`                                    | *number*                                      | :heavy_check_mark:                            | The quantity to set for the plan item.        |
| `resourceIds`                                 | *string*[]                                    | :heavy_check_mark:                            | N/A                                           |