# ResponseBodyRateLimit

## Example Usage

```typescript
import { ResponseBodyRateLimit } from "@vercel/sdk/models/getprojectsresponsebody.js";

let value: ResponseBodyRateLimit = {
  algo: "token_bucket",
  keys: [],
  limit: 815.07,
  window: 7458.77,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `algo`                                                   | [models.ResponseBodyAlgo](../models/responsebodyalgo.md) | :heavy_check_mark:                                       | N/A                                                      |
| `keys`                                                   | *string*[]                                               | :heavy_check_mark:                                       | N/A                                                      |
| `limit`                                                  | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `window`                                                 | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |