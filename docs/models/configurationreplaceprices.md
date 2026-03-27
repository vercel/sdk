# ConfigurationReplacePrices

The prices to replace in the subscription

## Example Usage

```typescript
import { ConfigurationReplacePrices } from "@vercel/sdk/models/buycreditsop.js";

let value: ConfigurationReplacePrices = {
  fixedPriceQuantity: 2936.78,
  replacesPriceId: "<id>",
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `fixedPriceQuantity`             | *number*                         | :heavy_check_mark:               | The quantity for the fixed price |
| `replacesPriceId`                | *string*                         | :heavy_check_mark:               | The ID of the price to replace   |