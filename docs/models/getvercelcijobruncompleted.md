# GetVercelCiJobRunCompleted

## Example Usage

```typescript
import { GetVercelCiJobRunCompleted } from "@vercel/sdk/models/getvercelcijobrunop.js";

let value: GetVercelCiJobRunCompleted = {
  completedAt: 8611.4,
  conclusion: {
    result: "failed",
    reason: "<value>",
  },
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `completedAt`                        | *number*                             | :heavy_check_mark:                   | N/A                                  |
| `conclusion`                         | *models.GetVercelCiJobRunConclusion* | :heavy_check_mark:                   | N/A                                  |