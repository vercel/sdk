# SearchVercelCiLogsInvocations

## Example Usage

```typescript
import { SearchVercelCiLogsInvocations } from "@vercel/sdk/models/searchvercelcilogsop.js";

let value: SearchVercelCiLogsInvocations = {
  invocationId: "<id>",
  attempt: 7849.38,
  tasks: [
    {
      jobDefinitionId: "<id>",
      jobName: "<value>",
      jobRunAttempt: 591.47,
      taskDefinitionId: "<id>",
      taskName: "<value>",
      lines: [],
    },
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `invocationId`                                                           | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `attempt`                                                                | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `tasks`                                                                  | [models.SearchVercelCiLogsTasks](../models/searchvercelcilogstasks.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |