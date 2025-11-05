# CreateProjectDismissedToasts

## Example Usage

```typescript
import { CreateProjectDismissedToasts } from "@vercel/sdk/models/createprojectop.js";

let value: CreateProjectDismissedToasts = {
  key: "<key>",
  dismissedAt: 9269.94,
  action: "accept",
  value: false,
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `key`                                                          | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `dismissedAt`                                                  | *number*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `action`                                                       | [models.CreateProjectAction](../models/createprojectaction.md) | :heavy_check_mark:                                             | N/A                                                            |
| `value`                                                        | *models.CreateProjectValue*                                    | :heavy_check_mark:                                             | N/A                                                            |