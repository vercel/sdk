# CreateProjectErl

## Example Usage

```typescript
import { CreateProjectErl } from "@vercel/sdk/models/createprojectop.js";

let value: CreateProjectErl = {
  algo: "fixed_window",
  window: 1092.29,
  limit: 8175.34,
  keys: [
    "<value>",
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `algo`                                                     | [models.CreateProjectAlgo](../models/createprojectalgo.md) | :heavy_check_mark:                                         | N/A                                                        |
| `window`                                                   | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `limit`                                                    | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `keys`                                                     | *string*[]                                                 | :heavy_check_mark:                                         | N/A                                                        |