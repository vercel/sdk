# UpdateProjectDismissedToasts

## Example Usage

```typescript
import { UpdateProjectDismissedToasts } from "@vercel/sdk/models/updateprojectop.js";

let value: UpdateProjectDismissedToasts = {
  key: "<key>",
  dismissedAt: 891.87,
  action: "delete",
  value: 1025.91,
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `key`                                                                                                      | *string*                                                                                                   | :heavy_check_mark:                                                                                         | unique identifier for the dismissed toast                                                                  |
| `dismissedAt`                                                                                              | *number*                                                                                                   | :heavy_check_mark:                                                                                         | unix timestamp representing the time the toast was dimissed                                                |
| `action`                                                                                                   | [models.UpdateProjectAction](../models/updateprojectaction.md)                                             | :heavy_check_mark:                                                                                         | Whether the toast was dismissed, the action was accepted, or the dismissal with this key should be removed |
| `value`                                                                                                    | *any*                                                                                                      | :heavy_check_mark:                                                                                         | N/A                                                                                                        |