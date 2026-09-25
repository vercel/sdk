# TaskDefinitions

## Example Usage

```typescript
import { TaskDefinitions } from "@vercel/sdk/models/listvercelcitaskdefinitionsop.js";

let value: TaskDefinitions = {
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
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `invocationId`                                | *string*                                      | :heavy_check_mark:                            | N/A                                           |
| `invocationAttempt`                           | *number*                                      | :heavy_check_mark:                            | N/A                                           |
| `jobDefinitionId`                             | *string*                                      | :heavy_check_mark:                            | N/A                                           |
| `jobRunAttempt`                               | *number*                                      | :heavy_check_mark:                            | N/A                                           |
| `taskDefinitionId`                            | *string*                                      | :heavy_check_mark:                            | N/A                                           |
| `name`                                        | *string*                                      | :heavy_check_mark:                            | N/A                                           |
| `operation`                                   | *models.ListVercelCiTaskDefinitionsOperation* | :heavy_check_mark:                            | N/A                                           |
| `dependencyTaskDefinitionIds`                 | *string*[]                                    | :heavy_check_mark:                            | N/A                                           |
| `createdAt`                                   | *number*                                      | :heavy_check_mark:                            | N/A                                           |