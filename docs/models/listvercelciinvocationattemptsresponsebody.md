# ListVercelCiInvocationAttemptsResponseBody

Successfully listed invocation attempts.

## Example Usage

```typescript
import { ListVercelCiInvocationAttemptsResponseBody } from "@vercel/sdk/models/listvercelciinvocationattemptsop.js";

let value: ListVercelCiInvocationAttemptsResponseBody = {
  attempts: [
    {
      invocationId: "<id>",
      attempt: 17.58,
      teamId: "<id>",
      source: {
        type: "vercel-ci",
      },
      createdAt: 4468.14,
      repositoryKey: "<value>",
      ref: "<value>",
      commitSha: "<value>",
      status: "jobs_on_hive_dispatched",
    },
  ],
  repositories: {},
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `attempts`                                                                                                   | [models.Attempts](../models/attempts.md)[]                                                                   | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `repositories`                                                                                               | [models.ListVercelCiInvocationAttemptsRepositories](../models/listvercelciinvocationattemptsrepositories.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |