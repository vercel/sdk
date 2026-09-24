# ResponseBodyDismissedToasts

## Example Usage

```typescript
import { ResponseBodyDismissedToasts } from "@vercel/sdk/models/responsebodyexpiration.js";

let value: ResponseBodyDismissedToasts = {
  action: "delete",
  dismissedAt: 7642.98,
  key: "<key>",
  value: {
    currentValue: false,
    previousValue: 9956.01,
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `action`                                                                                                                 | [models.GetProjectsResponseBodyProjectsResponse200Action](../models/getprojectsresponsebodyprojectsresponse200action.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `dismissedAt`                                                                                                            | *number*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `key`                                                                                                                    | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `value`                                                                                                                  | *models.GetProjectsResponseBodyValue*                                                                                    | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |