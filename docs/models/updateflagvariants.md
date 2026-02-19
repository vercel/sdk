# UpdateFlagVariants

## Example Usage

```typescript
import { UpdateFlagVariants } from "@vercel/sdk/models/updateflagop.js";

let value: UpdateFlagVariants = {
  id: "<id>",
  value: true,
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `id`                         | *string*                     | :heavy_check_mark:           | The id of the variant        |
| `label`                      | *string*                     | :heavy_minus_sign:           | A label for the variant      |
| `description`                | *string*                     | :heavy_minus_sign:           | A description of the variant |
| `value`                      | *models.UpdateFlagValue*     | :heavy_check_mark:           | N/A                          |