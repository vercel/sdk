# Cve

## Example Usage

```typescript
import { Cve } from "@vercel/sdk/models/createdeploymentop.js";

let value: Cve = {
  id: "<id>",
  score: 2381.11,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *string*           | :heavy_check_mark: | N/A                |
| `score`            | *number*           | :heavy_check_mark: | N/A                |
| `description`      | *string*           | :heavy_minus_sign: | N/A                |
| `link`             | *string*           | :heavy_minus_sign: | N/A                |