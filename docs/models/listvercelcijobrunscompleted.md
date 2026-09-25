# ListVercelCiJobRunsCompleted

## Example Usage

```typescript
import { ListVercelCiJobRunsCompleted } from "@vercel/sdk/models/listvercelcijobrunsop.js";

let value: ListVercelCiJobRunsCompleted = {
  completedAt: 1574.38,
  conclusion: {
    result: "succeeded",
  },
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `completedAt`                          | *number*                               | :heavy_check_mark:                     | N/A                                    |
| `conclusion`                           | *models.ListVercelCiJobRunsConclusion* | :heavy_check_mark:                     | N/A                                    |