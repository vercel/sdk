# TaskRuns

## Example Usage

```typescript
import { TaskRuns } from "@vercel/sdk/models/listvercelcitaskrunsop.js";

let value: TaskRuns = {
  invocationId: "<id>",
  invocationAttempt: 6739.66,
  jobDefinitionId: "<id>",
  jobRunAttempt: 9151.18,
  taskDefinitionId: "<id>",
  attempt: 3986.04,
  createdAt: 8903.12,
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `invocationId`                                                                     | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `invocationAttempt`                                                                | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `jobDefinitionId`                                                                  | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `jobRunAttempt`                                                                    | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `taskDefinitionId`                                                                 | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `attempt`                                                                          | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `createdAt`                                                                        | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `started`                                                                          | [models.ListVercelCiTaskRunsStarted](../models/listvercelcitaskrunsstarted.md)     | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `completed`                                                                        | [models.ListVercelCiTaskRunsCompleted](../models/listvercelcitaskrunscompleted.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |