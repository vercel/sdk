# Rule

## Example Usage

```typescript
import { Rule } from "@vercel/sdk/models/action.js";

let value: Rule = {
  id: "<id>",
  type: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *string*           | :heavy_check_mark: | N/A                |
| `type`             | *string*           | :heavy_check_mark: | N/A                |
| `model`            | *string*           | :heavy_minus_sign: | N/A                |
| `rewriteModel`     | *string*           | :heavy_minus_sign: | N/A                |