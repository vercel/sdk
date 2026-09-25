# Run

## Example Usage

```typescript
import { Run } from "@vercel/sdk/models/getvercelciinvocationtreeop.js";

let value: Run = {
  invocationId: "<id>",
  invocationAttempt: 8997.15,
  jobDefinitionId: "<id>",
  attempt: 5881.79,
  createdAt: 2886.58,
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `invocationId`                                                                                               | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `invocationAttempt`                                                                                          | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `jobDefinitionId`                                                                                            | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `attempt`                                                                                                    | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `createdAt`                                                                                                  | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `started`                                                                                                    | [models.GetVercelCiInvocationTreeStarted](../models/getvercelciinvocationtreestarted.md)                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `completed`                                                                                                  | [models.GetVercelCiInvocationTreeVercelCiCompleted](../models/getvercelciinvocationtreevercelcicompleted.md) | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |