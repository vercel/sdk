# JobRuns

## Example Usage

```typescript
import { JobRuns } from "@vercel/sdk/models/listvercelcijobrunsop.js";

let value: JobRuns = {
  invocationId: "<id>",
  invocationAttempt: 5168.81,
  jobDefinitionId: "<id>",
  attempt: 8285.19,
  createdAt: 9721.09,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `invocationId`                                                                   | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `invocationAttempt`                                                              | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `jobDefinitionId`                                                                | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `attempt`                                                                        | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `createdAt`                                                                      | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `started`                                                                        | [models.Started](../models/started.md)                                           | :heavy_minus_sign:                                                               | N/A                                                                              |
| `completed`                                                                      | [models.ListVercelCiJobRunsCompleted](../models/listvercelcijobrunscompleted.md) | :heavy_minus_sign:                                                               | N/A                                                                              |