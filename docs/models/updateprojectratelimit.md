# UpdateProjectRateLimit

## Example Usage

```typescript
import { UpdateProjectRateLimit } from "@vercel/sdk/models/updateprojectprojectsissuermode.js";

let value: UpdateProjectRateLimit = {
  algo: "token_bucket",
  window: 2388.07,
  limit: 9246.5,
  keys: [
    "<value 1>",
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `algo`                                                     | [models.UpdateProjectAlgo](../models/updateprojectalgo.md) | :heavy_check_mark:                                         | N/A                                                        |
| `window`                                                   | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `limit`                                                    | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `keys`                                                     | *string*[]                                                 | :heavy_check_mark:                                         | N/A                                                        |