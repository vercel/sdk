# GetVercelCiInvocationTreeVercelCiResponseCompleted

## Example Usage

```typescript
import { GetVercelCiInvocationTreeVercelCiResponseCompleted } from "@vercel/sdk/models/getvercelciinvocationtreeop.js";

let value: GetVercelCiInvocationTreeVercelCiResponseCompleted = {
  completedAt: 378.45,
  conclusion: {
    result: "skipped",
    reason: "<value>",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `completedAt`                                                | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `conclusion`                                                 | *models.GetVercelCiInvocationTreeVercelCiResponseConclusion* | :heavy_check_mark:                                           | N/A                                                          |