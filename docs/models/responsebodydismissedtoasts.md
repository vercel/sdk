# ResponseBodyDismissedToasts

## Example Usage

```typescript
import { ResponseBodyDismissedToasts } from "@vercel/sdk/models/getprojectsresponsebodybuildqueue.js";

let value: ResponseBodyDismissedToasts = {
  key: "<key>",
  dismissedAt: 9794.9,
  action: "delete",
  value: {
    previousValue: false,
    currentValue: 9956.01,
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `key`                                                                                              | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `dismissedAt`                                                                                      | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `action`                                                                                           | [models.GetProjectsResponseBodyProjectsAction](../models/getprojectsresponsebodyprojectsaction.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `value`                                                                                            | *models.ResponseBodyValue*                                                                         | :heavy_check_mark:                                                                                 | N/A                                                                                                |