# Products

## Example Usage

```typescript
import { Products } from "@vercel/sdk/models/getconfigurationproductsresponsebody.js";

let value: Products = {
  id: "<id>",
  metadataSchema: {
    properties: {
      "key": {
        items: {
          type: "number",
        },
        type: "array",
        uiControl: "slider",
        uiSteps: [],
      },
    },
    type: "object",
  },
  name: "<value>",
  protocols: {},
  slug: "<value>",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `id`                                                   | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `metadataSchema`                                       | [models.MetadataSchema](../models/metadataschema.md)   | :heavy_check_mark:                                     | N/A                                                    |
| `name`                                                 | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `primaryProtocol`                                      | [models.PrimaryProtocol](../models/primaryprotocol.md) | :heavy_minus_sign:                                     | N/A                                                    |
| `protocols`                                            | [models.Protocols](../models/protocols.md)             | :heavy_check_mark:                                     | N/A                                                    |
| `slug`                                                 | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |