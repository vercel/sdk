# GetProjectsDismissedToasts

## Example Usage

```typescript
import { GetProjectsDismissedToasts } from "@vercel/sdk/models/getprojectsop.js";

let value: GetProjectsDismissedToasts = {
  key: "<key>",
  dismissedAt: 9528.57,
  action: "accept",
  value: null,
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `key`                                                      | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `dismissedAt`                                              | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `action`                                                   | [models.GetProjectsAction](../models/getprojectsaction.md) | :heavy_check_mark:                                         | N/A                                                        |
| `value`                                                    | *models.GetProjectsValue*                                  | :heavy_check_mark:                                         | N/A                                                        |