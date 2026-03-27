# ConfigurationOptions

## Example Usage

```typescript
import { ConfigurationOptions } from "@vercel/sdk/models/buycreditsop.js";

let value: ConfigurationOptions = {
  items: [
    {
      name: "<value>",
      subtotal: "<value>",
      type: "renewal",
      years: 3018.53,
    },
  ],
  orderId: "<id>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [models.ConfigurationItems](../models/configurationitems.md)[] | :heavy_check_mark:                                             | N/A                                                            |
| `orderId`                                                      | *string*                                                       | :heavy_check_mark:                                             | The order ID of the domain name purchase                       |