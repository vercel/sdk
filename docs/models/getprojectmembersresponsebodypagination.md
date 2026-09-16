# GetProjectMembersResponseBodyPagination

## Example Usage

```typescript
import { GetProjectMembersResponseBodyPagination } from "@vercel/sdk/models/getprojectmembersop.js";

let value: GetProjectMembersResponseBodyPagination = {
  count: 20,
  hasNext: false,
  next: 1540095775951,
  prev: 1540095775951,
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               | Example                                                   |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `count`                                                   | *number*                                                  | :heavy_check_mark:                                        | Amount of items in the current page.                      | 20                                                        |
| `hasNext`                                                 | *boolean*                                                 | :heavy_check_mark:                                        | N/A                                                       |                                                           |
| `next`                                                    | *number*                                                  | :heavy_check_mark:                                        | Timestamp that must be used to request the next page.     | 1540095775951                                             |
| `prev`                                                    | *number*                                                  | :heavy_check_mark:                                        | Timestamp that must be used to request the previous page. | 1540095775951                                             |