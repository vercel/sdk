# Erl

## Example Usage

```typescript
import { Erl } from "@vercel/sdk/models/getprojectsrouteprojects1.js";

let value: Erl = {
  algo: "token_bucket",
  window: 1689.99,
  limit: 4648.04,
  keys: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `algo`                                                   | [models.ResponseBodyAlgo](../models/responsebodyalgo.md) | :heavy_check_mark:                                       | N/A                                                      |
| `window`                                                 | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `limit`                                                  | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `keys`                                                   | *string*[]                                               | :heavy_check_mark:                                       | N/A                                                      |