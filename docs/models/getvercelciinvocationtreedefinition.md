# GetVercelCiInvocationTreeDefinition

## Example Usage

```typescript
import { GetVercelCiInvocationTreeDefinition } from "@vercel/sdk/models/getvercelciinvocationtreeop.js";

let value: GetVercelCiInvocationTreeDefinition = {
  invocationId: "<id>",
  invocationAttempt: 3490.86,
  jobDefinitionId: "<id>",
  jobRunAttempt: 5425.11,
  taskDefinitionId: "<id>",
  name: "<value>",
  operation: {
    kind: "command",
    command: "<value>",
  },
  dependencyTaskDefinitionIds: [],
  createdAt: 4108.14,
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `invocationId`                              | *string*                                    | :heavy_check_mark:                          | N/A                                         |
| `invocationAttempt`                         | *number*                                    | :heavy_check_mark:                          | N/A                                         |
| `jobDefinitionId`                           | *string*                                    | :heavy_check_mark:                          | N/A                                         |
| `jobRunAttempt`                             | *number*                                    | :heavy_check_mark:                          | N/A                                         |
| `taskDefinitionId`                          | *string*                                    | :heavy_check_mark:                          | N/A                                         |
| `name`                                      | *string*                                    | :heavy_check_mark:                          | N/A                                         |
| `operation`                                 | *models.GetVercelCiInvocationTreeOperation* | :heavy_check_mark:                          | N/A                                         |
| `dependencyTaskDefinitionIds`               | *string*[]                                  | :heavy_check_mark:                          | N/A                                         |
| `createdAt`                                 | *number*                                    | :heavy_check_mark:                          | N/A                                         |