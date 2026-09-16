# ListFlagVersionsVariants

## Example Usage

```typescript
import { ListFlagVersionsVariants } from "@vercel/sdk/models/listflagversionsop.js";

let value: ListFlagVersionsVariants = {
  id: "<id>",
  value: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `description`                  | *string*                       | :heavy_minus_sign:             | N/A                            |
| `id`                           | *string*                       | :heavy_check_mark:             | N/A                            |
| `label`                        | *string*                       | :heavy_minus_sign:             | N/A                            |
| `value`                        | *models.ListFlagVersionsValue* | :heavy_check_mark:             | N/A                            |