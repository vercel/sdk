# GetSandboxesV1Pagination

## Example Usage

```typescript
import { GetSandboxesV1Pagination } from "@vercel/sdk/models/getsandboxesv1op.js";

let value: GetSandboxesV1Pagination = {
  total: 4279.96,
  count: 20,
  next: 1540095775951,
  prev: 1540095775951,
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               | Example                                                   |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `total`                                                   | *number*                                                  | :heavy_check_mark:                                        | N/A                                                       |                                                           |
| `count`                                                   | *number*                                                  | :heavy_check_mark:                                        | Amount of items in the current page.                      | 20                                                        |
| `next`                                                    | *number*                                                  | :heavy_check_mark:                                        | Timestamp that must be used to request the next page.     | 1540095775951                                             |
| `prev`                                                    | *number*                                                  | :heavy_check_mark:                                        | Timestamp that must be used to request the previous page. | 1540095775951                                             |