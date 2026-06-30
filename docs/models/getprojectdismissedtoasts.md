# GetProjectDismissedToasts

## Example Usage

```typescript
import { GetProjectDismissedToasts } from "@vercel/sdk/models/getprojectresponsebody.js";

let value: GetProjectDismissedToasts = {
  key: "<key>",
  dismissedAt: 6503.6,
  action: "accept",
  value: "<value>",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `key`                                                    | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `dismissedAt`                                            | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `action`                                                 | [models.GetProjectAction](../models/getprojectaction.md) | :heavy_check_mark:                                       | N/A                                                      |
| `value`                                                  | *models.GetProjectValue*                                 | :heavy_check_mark:                                       | N/A                                                      |