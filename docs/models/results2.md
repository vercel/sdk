# Results2

## Example Usage

```typescript
import { Results2 } from "@vercel/sdk/models/searchdomainsop.js";

let value: Results2 = {
  domain: "vengeful-expansion.name",
  available: true,
  years: 9866.14,
  price: 6666.72,
  renewalPrice: 1492.43,
  premium: true,
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `domain`            | *string*            | :heavy_check_mark:  | A valid domain name |
| `available`         | *true*              | :heavy_check_mark:  | N/A                 |
| `years`             | *number*            | :heavy_check_mark:  | N/A                 |
| `price`             | *number*            | :heavy_check_mark:  | N/A                 |
| `renewalPrice`      | *number*            | :heavy_check_mark:  | N/A                 |
| `premium`           | *boolean*           | :heavy_check_mark:  | N/A                 |