# GetConfigurationProductsResponseBody

List of products available for this integration configuration

## Example Usage

```typescript
import { GetConfigurationProductsResponseBody } from "@vercel/sdk/models/getconfigurationproductsresponsebody.js";

let value: GetConfigurationProductsResponseBody = {
  configuration: {
    id: "<id>",
  },
  integration: {
    id: "<id>",
    name: "<value>",
    slug: "<value>",
  },
  products: [],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `configuration`                                                                                    | [models.GetConfigurationProductsConfiguration](../models/getconfigurationproductsconfiguration.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `integration`                                                                                      | [models.GetConfigurationProductsIntegration](../models/getconfigurationproductsintegration.md)     | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `products`                                                                                         | [models.Products](../models/products.md)[]                                                         | :heavy_check_mark:                                                                                 | N/A                                                                                                |