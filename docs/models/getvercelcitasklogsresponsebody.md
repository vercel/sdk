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
      jobRunAttempt: 411.78,
      taskDefinitionId: "<id>",
      taskName: "<value>",
      lines: [
        {
          level: "<value>",
          timestamp: 6379.9,
          message: "<value>",
        },
      ],
    },
  ],
  hasMore: false,
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `tasks`                                                                                                         | [models.GetVercelCiTaskLogsTasks](../models/getvercelcitasklogstasks.md)[]                                      | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `hasMore`                                                                                                       | *boolean*                                                                                                       | :heavy_check_mark:                                                                                              | Whether more tasks matched the filters than were returned. With `search`, whether more than 1000 lines matched. |