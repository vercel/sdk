# KeepLastSnapshots

Keep-last snapshot configuration.

## Example Usage

```typescript
import { KeepLastSnapshots } from "@vercel/sdk/models/namedsandbox.js";

let value: KeepLastSnapshots = {
  count: 5,
  expiration: 604800000,
  deleteEvicted: true,
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         | Example                                             |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `count`                                             | *number*                                            | :heavy_check_mark:                                  | Number of most recent snapshots to keep.            | 5                                                   |
| `expiration`                                        | *number*                                            | :heavy_minus_sign:                                  | Expiration time in milliseconds for kept snapshots. | 604800000                                           |
| `deleteEvicted`                                     | *boolean*                                           | :heavy_check_mark:                                  | Whether to immediately delete evicted snapshots.    | true                                                |