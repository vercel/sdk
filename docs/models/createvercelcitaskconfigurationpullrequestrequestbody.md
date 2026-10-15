# CreateVercelCiTaskConfigurationPullRequestRequestBody

## Example Usage

```typescript
import { CreateVercelCiTaskConfigurationPullRequestRequestBody } from "@vercel/sdk/models/createvercelcitaskconfigurationpullrequestop.js";

let value: CreateVercelCiTaskConfigurationPullRequestRequestBody = {
  tasks: [
    {
      name: "<value>",
      configPath: "<value>",
    },
  ],
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `tasks`                              | [models.Tasks](../models/tasks.md)[] | :heavy_check_mark:                   | N/A                                  |