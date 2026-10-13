# GetVercelCiTaskLogsTasks

## Example Usage

```typescript
import { GetVercelCiTaskLogsTasks } from "@vercel/sdk/models/getvercelcitasklogsop.js";

let value: GetVercelCiTaskLogsTasks = {
  jobDefinitionId: "<id>",
  jobName: "<value>",
  jobRunAttempt: 2445.38,
  taskDefinitionId: "<id>",
  taskName: "<value>",
  lines: [],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `jobDefinitionId`                                                          | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `jobName`                                                                  | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `jobRunAttempt`                                                            | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `taskDefinitionId`                                                         | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `taskName`                                                                 | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `taskRunAttempt`                                                           | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `conclusion`                                                               | *models.GetVercelCiTaskLogsConclusion*                                     | :heavy_minus_sign:                                                         | N/A                                                                        |
| `lines`                                                                    | [models.GetVercelCiTaskLogsLines](../models/getvercelcitasklogslines.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |