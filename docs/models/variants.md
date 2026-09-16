# Variants

## Example Usage

```typescript
import { Variants } from "@vercel/sdk/models/flag.js";

let value: Variants = {
  id: "<id>",
  value: 2250.11,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `description`      | *string*           | :heavy_minus_sign: | N/A                |
| `id`               | *string*           | :heavy_check_mark: | N/A                |
| `label`            | *string*           | :heavy_minus_sign: | N/A                |
| `value`            | *models.Value*     | :heavy_check_mark: | N/A                |