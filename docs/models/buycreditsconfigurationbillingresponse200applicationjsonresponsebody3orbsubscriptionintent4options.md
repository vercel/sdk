# BuyCreditsConfigurationBillingResponse200ApplicationJSONResponseBody3OrbSubscriptionIntent4Options

Configuration input options for adjusting plan item quantity.

## Example Usage

```typescript
import {
  BuyCreditsConfigurationBillingResponse200ApplicationJSONResponseBody3OrbSubscriptionIntent4Options,
} from "@vercel/sdk/models/buycreditsop.js";

let value:
  BuyCreditsConfigurationBillingResponse200ApplicationJSONResponseBody3OrbSubscriptionIntent4Options =
    {
      addedResourceIds: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      productAlias: "<value>",
      removedResourceIds: [
        "<value 1>",
        "<value 2>",
      ],
    };
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `addedResourceIds`                                                                                                       | *string*[]                                                                                                               | :heavy_check_mark:                                                                                                       | The resource IDs to incrementally add. The quantity of the plan item will be increased by the number of resource IDs.    |
| `productAlias`                                                                                                           | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The alias of the product to adjust quantity for.                                                                         |
| `removedResourceIds`                                                                                                     | *string*[]                                                                                                               | :heavy_check_mark:                                                                                                       | The resource IDs to incrementally remove. The quantity of the plan item will be decreased by the number of resource IDs. |