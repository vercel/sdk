# UpdateProjectRateLimit

## Example Usage

```typescript
import { UpdateProjectRateLimit } from "@vercel/sdk/models/updateprojectresponsebody.js";

let value: UpdateProjectRateLimit = {
  algo: "token_bucket",
  keys: [],
  limit: 9246.5,
  window: 2936.69,
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `algo`                                                     | [models.UpdateProjectAlgo](../models/updateprojectalgo.md) | :heavy_check_mark:                                         | N/A                                                        |
| `keys`                                                     | *string*[]                                                 | :heavy_check_mark:                                         | N/A                                                        |
| `limit`                                                    | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `window`                                                   | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |