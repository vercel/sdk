# Variants

## Example Usage

```typescript
import { Variants } from "@vercel/sdk/models/flag.js";

let value: Variants = {
  value: true,
  id: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `description`      | *string*           | :heavy_minus_sign: | N/A                |
| `label`            | *string*           | :heavy_minus_sign: | N/A                |
| `value`            | *models.Value*     | :heavy_check_mark: | N/A                |
| `id`               | *string*           | :heavy_check_mark: | N/A                |