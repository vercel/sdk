# UpdateProjectErl

## Example Usage

```typescript
import { UpdateProjectErl } from "@vercel/sdk/models/updateprojectop.js";

let value: UpdateProjectErl = {
  algo: "token_bucket",
  window: 7339.64,
  limit: 6140.45,
  keys: [
    "<value>",
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