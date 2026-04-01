# UpdateMicrofrontendsDismissedToasts

## Example Usage

```typescript
import { UpdateMicrofrontendsDismissedToasts } from "@vercel/sdk/models/updatemicrofrontendsop.js";

let value: UpdateMicrofrontendsDismissedToasts = {
  key: "<key>",
  dismissedAt: 6429.29,
  action: "accept",
  value: {
    previousValue: false,
    currentValue: false,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `key`                                                                        | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `dismissedAt`                                                                | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `action`                                                                     | [models.UpdateMicrofrontendsAction](../models/updatemicrofrontendsaction.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `value`                                                                      | *models.UpdateMicrofrontendsValue*                                           | :heavy_check_mark:                                                           | N/A                                                                          |