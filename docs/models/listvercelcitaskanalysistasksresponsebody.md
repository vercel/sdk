# ListVercelCiTaskAnalysisTasksResponseBody

Discovered task analysis tasks.

## Example Usage

```typescript
import { ListVercelCiTaskAnalysisTasksResponseBody } from "@vercel/sdk/models/listvercelcitaskanalysistasksop.js";

let value: ListVercelCiTaskAnalysisTasksResponseBody = {
  tasks: [],
  pagination: {},
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `tasks`                                                                                                | [models.Tasks](../models/tasks.md)[]                                                                   | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `pagination`                                                                                           | [models.ListVercelCiTaskAnalysisTasksPagination](../models/listvercelcitaskanalysistaskspagination.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |