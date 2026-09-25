# ListVercelCiTaskRunsCompleted

## Example Usage

```typescript
import { ListVercelCiTaskRunsCompleted } from "@vercel/sdk/models/listvercelcitaskrunsop.js";

let value: ListVercelCiTaskRunsCompleted = {
  completedAt: 6599.57,
  conclusion: {
    result: "cached",
  },
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `completedAt`                           | *number*                                | :heavy_check_mark:                      | N/A                                     |
| `conclusion`                            | *models.ListVercelCiTaskRunsConclusion* | :heavy_check_mark:                      | N/A                                     |