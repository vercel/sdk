# JobRun

## Example Usage

```typescript
import { JobRun } from "@vercel/sdk/models/getvercelcijobrunop.js";

let value: JobRun = {
  invocationId: "<id>",
  invocationAttempt: 5838.34,
  jobDefinitionId: "<id>",
  attempt: 3848.57,
  createdAt: 9229.18,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `invocationId`                                                               | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `invocationAttempt`                                                          | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `jobDefinitionId`                                                            | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `attempt`                                                                    | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `createdAt`                                                                  | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `started`                                                                    | [models.GetVercelCiJobRunStarted](../models/getvercelcijobrunstarted.md)     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `completed`                                                                  | [models.GetVercelCiJobRunCompleted](../models/getvercelcijobruncompleted.md) | :heavy_minus_sign:                                                           | N/A                                                                          |