# SearchVercelCiLogsTasks

## Example Usage

```typescript
import { SearchVercelCiLogsTasks } from "@vercel/sdk/models/searchvercelcilogsop.js";

let value: SearchVercelCiLogsTasks = {
  jobDefinitionId: "<id>",
  jobName: "<value>",
  jobRunAttempt: 8585.26,
  taskDefinitionId: "<id>",
  taskName: "<value>",
  lines: [],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `jobDefinitionId`                                                        | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `jobName`                                                                | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `jobRunAttempt`                                                          | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `taskDefinitionId`                                                       | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `taskName`                                                               | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `taskRunAttempt`                                                         | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `conclusion`                                                             | *models.SearchVercelCiLogsConclusion*                                    | :heavy_minus_sign:                                                       | N/A                                                                      |
| `lines`                                                                  | [models.SearchVercelCiLogsLines](../models/searchvercelcilogslines.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |