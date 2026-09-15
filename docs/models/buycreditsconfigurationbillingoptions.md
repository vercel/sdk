# BuyCreditsConfigurationBillingOptions

## Example Usage

```typescript
import { BuyCreditsConfigurationBillingOptions } from "@vercel/sdk/models/buycreditsop.js";

let value: BuyCreditsConfigurationBillingOptions = {
  orbSubscriptionId: "<id>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `orbSubscriptionId`                                          | *string*                                                     | :heavy_check_mark:                                           | The ID of the Orb subscription to modify price intervals for |
| `add`                                                        | *any*[]                                                      | :heavy_minus_sign:                                           | The price intervals to add to the subscription               |
| `addAdjustments`                                             | *any*[]                                                      | :heavy_minus_sign:                                           | The adjustment intervals to add to the subscription          |
| `allowInvoiceCreditOrVoid`                                   | *boolean*                                                    | :heavy_minus_sign:                                           | Whether to allow invoice credit or void                      |
| `edit`                                                       | *any*[]                                                      | :heavy_minus_sign:                                           | The price intervals to edit on the subscription              |
| `editAdjustments`                                            | *any*[]                                                      | :heavy_minus_sign:                                           | The adjustment intervals to edit on the subscription         |