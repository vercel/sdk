# GetVercelCiTaskLogsResponseBody

Successfully fetched task log lines.

## Example Usage

```typescript
import { GetVercelCiTaskLogsResponseBody } from "@vercel/sdk/models/getvercelcitasklogsop.js";

let value: GetVercelCiTaskLogsResponseBody = {
  tasks: [
    {
      jobDefinitionId: "<id>",
      jobName: "<value>",
      jobRunAttempt: 3400.16,
      taskDefinitionId: "<id>",
      taskName: "<value>",
      lines: [
        {
          level: "<value>",
          timestamp: 1902.12,
          message: "<value>",
        },
      ],
    },
  ],
  hasMore: true,
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `tasks`                                                    | [models.Tasks](../models/tasks.md)[]                       | :heavy_check_mark:                                         | N/A                                                        |
| `hasMore`                                                  | *boolean*                                                  | :heavy_check_mark:                                         | Whether more tasks matched the filters than were returned. |