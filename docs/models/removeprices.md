# RemovePrices

The prices to remove in the subscription

## Example Usage

```typescript
import { RemovePrices } from "@vercel/sdk/models/buycreditsop.js";

let value: RemovePrices = {
  priceId: "<id>",
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `priceId`                     | *string*                      | :heavy_check_mark:            | The ID of the price to remove |