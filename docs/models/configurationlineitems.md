# ConfigurationLineItems

The line items that make up the Purchase Intent.

## Example Usage

```typescript
import { ConfigurationLineItems } from "@vercel/sdk/models/buycreditsop.js";

let value: ConfigurationLineItems = {
  description: "er grim whether",
  id: "<id>",
  name: "<value>",
  productId: "<id>",
  quantity: "<value>",
  unitAmount: "<value>",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `description`                                      | *string*                                           | :heavy_check_mark:                                 | The description of the line item                   |
| `id`                                               | *string*                                           | :heavy_check_mark:                                 | The ID of the line item                            |
| `metadata`                                         | Record<string, *string*>                           | :heavy_minus_sign:                                 | Optional metadata for the line item                |
| `name`                                             | *string*                                           | :heavy_check_mark:                                 | The name of the line item                          |
| `productAlias`                                     | *string*                                           | :heavy_minus_sign:                                 | The alias of the product being purchased           |
| `productId`                                        | *string*                                           | :heavy_check_mark:                                 | The ID of the product being purchased              |
| `quantity`                                         | *string*                                           | :heavy_check_mark:                                 | The quantity of the line item                      |
| `refund`                                           | *string*                                           | :heavy_minus_sign:                                 | The amount of the line item that has been refunded |
| `unitAmount`                                       | *string*                                           | :heavy_check_mark:                                 | The unit amount of the line item                   |