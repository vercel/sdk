# CreateProjectDismissedToasts

## Example Usage

```typescript
import { CreateProjectDismissedToasts } from "@vercel/sdk/models/createprojectcontenthint8.js";

let value: CreateProjectDismissedToasts = {
  action: "delete",
  dismissedAt: 5306.53,
  key: "<key>",
  value: {
    currentValue: false,
    previousValue: false,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `action`                                                       | [models.CreateProjectAction](../models/createprojectaction.md) | :heavy_check_mark:                                             | N/A                                                            |
| `dismissedAt`                                                  | *number*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `key`                                                          | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `value`                                                        | *models.CreateProjectValue*                                    | :heavy_check_mark:                                             | N/A                                                            |