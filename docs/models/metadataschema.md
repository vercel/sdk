# MetadataSchema

## Example Usage

```typescript
import { MetadataSchema } from "@vercel/sdk/models/getconfigurationproductsop.js";

let value: MetadataSchema = {
  type: "object",
  properties: {},
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `type`                                                                           | [models.GetConfigurationProductsType](../models/getconfigurationproductstype.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `properties`                                                                     | Record<string, *models.Properties*>                                              | :heavy_check_mark:                                                               | N/A                                                                              |
| `required`                                                                       | *string*[]                                                                       | :heavy_minus_sign:                                                               | N/A                                                                              |