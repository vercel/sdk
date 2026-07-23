# ResponseBodyRateLimit

## Example Usage

```typescript
import { ResponseBodyRateLimit } from "@vercel/sdk/models/getprojectsblockhistoryprojectsroute.js";

let value: ResponseBodyRateLimit = {
  algo: "token_bucket",
  window: 71.94,
  limit: 815.07,
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