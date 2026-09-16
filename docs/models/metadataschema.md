# MetadataSchema

## Example Usage

```typescript
import { MetadataSchema } from "@vercel/sdk/models/getconfigurationproductsresponsebody.js";

let value: MetadataSchema = {
  properties: {},
  type: "object",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `properties`                                                                     | Record<string, *models.Properties*>                                              | :heavy_check_mark:                                                               | N/A                                                                              |
| `required`                                                                       | *string*[]                                                                       | :heavy_minus_sign:                                                               | N/A                                                                              |
| `type`                                                                           | [models.GetConfigurationProductsType](../models/getconfigurationproductstype.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `uiOrder`                                                                        | *string*[]                                                                       | :heavy_minus_sign:                                                               | N/A                                                                              |