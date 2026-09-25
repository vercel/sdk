# GetVercelCiInvocationTreeJobs

## Example Usage

```typescript
import { GetVercelCiInvocationTreeJobs } from "@vercel/sdk/models/getvercelciinvocationtreeop.js";

let value: GetVercelCiInvocationTreeJobs = {
  definition: {
    invocationId: "<id>",
    invocationAttempt: 9219,
    jobDefinitionId: "<id>",
    kind: "turbo",
    name: "<value>",
    command: "<value>",
    createdAt: 6597.42,
  },
  tasks: [],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `definition`                                                                           | [models.Definition](../models/definition.md)                                           | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `run`                                                                                  | [models.Run](../models/run.md)                                                         | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `tasks`                                                                                | [models.GetVercelCiInvocationTreeTasks](../models/getvercelciinvocationtreetasks.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |