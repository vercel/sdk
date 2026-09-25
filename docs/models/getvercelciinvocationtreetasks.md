# GetVercelCiInvocationTreeTasks

## Example Usage

```typescript
import { GetVercelCiInvocationTreeTasks } from "@vercel/sdk/models/getvercelciinvocationtreeop.js";

let value: GetVercelCiInvocationTreeTasks = {
  definition: {
    invocationId: "<id>",
    invocationAttempt: 1660.8,
    jobDefinitionId: "<id>",
    jobRunAttempt: 934.86,
    taskDefinitionId: "<id>",
    name: "<value>",
    operation: {
      kind: "command",
      command: "<value>",
    },
    dependencyTaskDefinitionIds: [],
    createdAt: 5697.52,
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `definition`                                                                                   | [models.GetVercelCiInvocationTreeDefinition](../models/getvercelciinvocationtreedefinition.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `run`                                                                                          | [models.GetVercelCiInvocationTreeRun](../models/getvercelciinvocationtreerun.md)               | :heavy_minus_sign:                                                                             | N/A                                                                                            |