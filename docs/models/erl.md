# Erl

## Example Usage

```typescript
import { Erl } from "@vercel/sdk/models/updateprojectdatacacheop.js";

let value: Erl = {
  algo: "fixed_window",
  window: 978.44,
  limit: 8621.92,
  keys: [
    "<value>",
  ],
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `algo`                           | [models.Algo](../models/algo.md) | :heavy_check_mark:               | N/A                              |
| `window`                         | *number*                         | :heavy_check_mark:               | N/A                              |
| `limit`                          | *number*                         | :heavy_check_mark:               | N/A                              |
| `keys`                           | *string*[]                       | :heavy_check_mark:               | N/A                              |