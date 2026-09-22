# UpdateMicrofrontendsDismissedToasts

## Example Usage

```typescript
import { UpdateMicrofrontendsDismissedToasts } from "@vercel/sdk/models/updatemicrofrontendshasprojectsvalue.js";

let value: UpdateMicrofrontendsDismissedToasts = {
  action: "cancel",
  dismissedAt: 8652.27,
  key: "<key>",
  value: {
    currentValue: false,
    previousValue: false,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `action`                                                                     | [models.UpdateMicrofrontendsAction](../models/updatemicrofrontendsaction.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `dismissedAt`                                                                | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `key`                                                                        | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `value`                                                                      | *models.UpdateMicrofrontendsValue*                                           | :heavy_check_mark:                                                           | N/A                                                                          |