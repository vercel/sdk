# ListVercelCiTaskRunsResponseBody

Successfully listed task runs.

## Example Usage

```typescript
import { ListVercelCiTaskRunsResponseBody } from "@vercel/sdk/models/listvercelcitaskrunsop.js";

let value: ListVercelCiTaskRunsResponseBody = {
  taskRuns: [
    {
      invocationId: "<id>",
      invocationAttempt: 6739.66,
      jobDefinitionId: "<id>",
      jobRunAttempt: 9151.18,
      taskDefinitionId: "<id>",
      attempt: 3986.04,
      createdAt: 8903.12,
    },
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `taskRuns`                                 | [models.TaskRuns](../models/taskruns.md)[] | :heavy_check_mark:                         | N/A                                        |