# GetVercelCiInvocationTreeVercelCiCompleted

## Example Usage

```typescript
import { GetVercelCiInvocationTreeVercelCiCompleted } from "@vercel/sdk/models/getvercelciinvocationtreeop.js";

let value: GetVercelCiInvocationTreeVercelCiCompleted = {
  completedAt: 9242.65,
  conclusion: {
    result: "skipped",
    reason: "<value>",
  },
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `completedAt`                                        | *number*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `conclusion`                                         | *models.GetVercelCiInvocationTreeVercelCiConclusion* | :heavy_check_mark:                                   | N/A                                                  |