# UpdateProjectProjectsDismissedToasts

## Example Usage

```typescript
import { UpdateProjectProjectsDismissedToasts } from "@vercel/sdk/models/updateprojectop.js";

let value: UpdateProjectProjectsDismissedToasts = {
  key: "<key>",
  dismissedAt: 2177.17,
  action: "accept",
  value: {
    previousValue: "<value>",
    currentValue: 5659.91,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `key`                                                                          | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `dismissedAt`                                                                  | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `action`                                                                       | [models.UpdateProjectProjectsAction](../models/updateprojectprojectsaction.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `value`                                                                        | *models.UpdateProjectValue*                                                    | :heavy_check_mark:                                                             | N/A                                                                            |