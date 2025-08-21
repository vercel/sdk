# GetConfigurationProductsResponseBody

List of products available for this integration configuration

## Example Usage

```typescript
import { GetConfigurationProductsResponseBody } from "@vercel/sdk/models/getconfigurationproductsop.js";

let value: GetConfigurationProductsResponseBody = {
  products: [],
  integration: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
  },
  configuration: {
    id: "<id>",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `products`                                                                                         | [models.Products](../models/products.md)[]                                                         | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `integration`                                                                                      | [models.Integration](../models/integration.md)                                                     | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `configuration`                                                                                    | [models.GetConfigurationProductsConfiguration](../models/getconfigurationproductsconfiguration.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |