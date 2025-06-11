# PatchEdgeConfigItemsRequestBody

## Example Usage

```typescript
import { PatchEdgeConfigItemsRequestBody } from "@vercel/sdk/models/patchedgeconfigitemsop.js";

let value: PatchEdgeConfigItemsRequestBody = {
  items: [
    {
      operation: "update",
      key: "<key>",
      description: "briskly beside whoever ugh soon perfectly per defensive",
    },
  ],
  definition: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `items`            | *models.Items*[]   | :heavy_check_mark: | N/A                |
| `definition`       | *any*              | :heavy_check_mark: | N/A                |