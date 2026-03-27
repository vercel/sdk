# ReplacePrices

The prices to replace in the subscription

## Example Usage

```typescript
import { ReplacePrices } from "@vercel/sdk/models/buycreditsop.js";

let value: ReplacePrices = {
  fixedPriceQuantity: 7837.93,
  replacesPriceId: "<id>",
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `fixedPriceQuantity`             | *number*                         | :heavy_check_mark:               | The quantity for the fixed price |
| `replacesPriceId`                | *string*                         | :heavy_check_mark:               | The ID of the price to replace   |