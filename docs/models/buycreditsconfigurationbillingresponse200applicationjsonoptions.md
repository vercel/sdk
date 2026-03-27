# BuyCreditsConfigurationBillingResponse200ApplicationJSONOptions

Configuration input options for setting plan item quantity.

## Example Usage

```typescript
import { BuyCreditsConfigurationBillingResponse200ApplicationJSONOptions } from "@vercel/sdk/models/buycreditsop.js";

let value: BuyCreditsConfigurationBillingResponse200ApplicationJSONOptions = {
  productAlias: "<value>",
  quantity: 7159.29,
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `productAlias`                                                                      | *string*                                                                            | :heavy_check_mark:                                                                  | The alias of the product to set quantity for.                                       |
| `quantity`                                                                          | *number*                                                                            | :heavy_check_mark:                                                                  | The quantity to set for the plan item.                                              |
| `resourceIds`                                                                       | *string*[]                                                                          | :heavy_minus_sign:                                                                  | The resource IDs for the plan item. Only set if SKU requires resource entitlements. |