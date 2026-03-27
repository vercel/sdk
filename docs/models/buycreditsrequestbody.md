# BuyCreditsRequestBody

## Example Usage

```typescript
import { BuyCreditsRequestBody } from "@vercel/sdk/models/buycreditsop.js";

let value: BuyCreditsRequestBody = {
  item: {
    type: "credits",
    creditType: "v0",
    amount: 77824,
  },
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `item`                           | [models.Item](../models/item.md) | :heavy_check_mark:               | N/A                              |