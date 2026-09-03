# ConnectPagination

Cursor for the next page.

## Example Usage

```typescript
import { ConnectPagination } from "@vercel/sdk/models/connectpagination.js";

let value: ConnectPagination = {
  next: "<value>",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `next`                                                | *string*                                              | :heavy_check_mark:                                    | Opaque value to pass as `cursor` on the next request. |