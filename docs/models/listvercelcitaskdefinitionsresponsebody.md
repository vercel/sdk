# ListVercelCiTaskDefinitionsResponseBody

Successfully listed task definitions.

## Example Usage

```typescript
import { ListVercelCiTaskDefinitionsResponseBody } from "@vercel/sdk/models/listvercelcitaskdefinitionsop.js";

let value: ListVercelCiTaskDefinitionsResponseBody = {
  taskDefinitions: [
    {
      invocationId: "<id>",
      invocationAttempt: 1264.97,
      jobDefinitionId: "<id>",
      jobRunAttempt: 8054,
      taskDefinitionId: "<id>",
      name: "<value>",
      operation: {
        kind: "command",
        command: "<value>",
      },
      dependencyTaskDefinitionIds: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      createdAt: 6273.29,
    },
  ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `taskDefinitions`                                        | [models.TaskDefinitions](../models/taskdefinitions.md)[] | :heavy_check_mark:                                       | N/A                                                      |