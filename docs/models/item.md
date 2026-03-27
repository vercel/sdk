# Item

## Example Usage

```typescript
import { Item } from "@vercel/sdk/models/buycreditsop.js";

let value: Item = {
  type: "credits",
  creditType: "gateway",
  amount: 571875,
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `type`                                               | [models.BuyCreditsType](../models/buycreditstype.md) | :heavy_check_mark:                                   | The type of item to purchase.                        |
| `creditType`                                         | [models.CreditType](../models/credittype.md)         | :heavy_check_mark:                                   | The type of credits to purchase.                     |
| `amount`                                             | *number*                                             | :heavy_check_mark:                                   | The amount of credits to purchase.                   |