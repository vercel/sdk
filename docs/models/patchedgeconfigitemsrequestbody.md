# PatchEdgeConfigItemsRequestBody

## Example Usage

```typescript
import { PatchEdgeConfigItemsRequestBody } from "@vercel/sdk/models/patchedgeconfigitemsop.js";

let value: PatchEdgeConfigItemsRequestBody = {
  items: [
    {
      operation: "delete",
      key: "<key>",
      value: "<value>",
    },
  ],
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `items`                              | *models.PatchEdgeConfigItemsItems*[] | :heavy_check_mark:                   | N/A                                  |