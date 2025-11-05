# UpdateProjectDataCacheDismissedToasts

## Example Usage

```typescript
import { UpdateProjectDataCacheDismissedToasts } from "@vercel/sdk/models/updateprojectdatacacheop.js";

let value: UpdateProjectDataCacheDismissedToasts = {
  key: "<key>",
  dismissedAt: 4681.05,
  action: "delete",
  value: {
    previousValue: false,
    currentValue: "<value>",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `key`                                                                            | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `dismissedAt`                                                                    | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `action`                                                                         | [models.UpdateProjectDataCacheAction](../models/updateprojectdatacacheaction.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `value`                                                                          | *models.UpdateProjectDataCacheValue*                                             | :heavy_check_mark:                                                               | N/A                                                                              |