# ResponseBodyDismissedToasts

## Example Usage

```typescript
import { ResponseBodyDismissedToasts } from "@vercel/sdk/models/getprojectsop.js";

let value: ResponseBodyDismissedToasts = {
  key: "<key>",
  dismissedAt: 9794.9,
  action: "delete",
  value: false,
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `key`                                                                              | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `dismissedAt`                                                                      | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `action`                                                                           | [models.GetProjectsResponseBodyAction](../models/getprojectsresponsebodyaction.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `value`                                                                            | *models.ResponseBodyValue*                                                         | :heavy_check_mark:                                                                 | N/A                                                                                |