# CreateFlagVariants

## Example Usage

```typescript
import { CreateFlagVariants } from "@vercel/sdk/models/createflagop.js";

let value: CreateFlagVariants = {
  id: "<id>",
  value: 5418.34,
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `id`                         | *string*                     | :heavy_check_mark:           | The id of the variant        |
| `label`                      | *string*                     | :heavy_minus_sign:           | A label for the variant      |
| `description`                | *string*                     | :heavy_minus_sign:           | A description of the variant |
| `value`                      | *any*                        | :heavy_check_mark:           | N/A                          |