# GetProjectDismissedToasts

## Example Usage

```typescript
import { GetProjectDismissedToasts } from "@vercel/sdk/models/getprojecthas2.js";

let value: GetProjectDismissedToasts = {
  action: "cancel",
  dismissedAt: 1237.16,
  key: "<key>",
  value: "<value>",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `action`                                                 | [models.GetProjectAction](../models/getprojectaction.md) | :heavy_check_mark:                                       | N/A                                                      |
| `dismissedAt`                                            | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `key`                                                    | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `value`                                                  | *models.GetProjectValue*                                 | :heavy_check_mark:                                       | N/A                                                      |