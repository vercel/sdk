# GetVercelCiInvocationResponseBody

Successfully fetched the invocation.

## Example Usage

```typescript
import { GetVercelCiInvocationResponseBody } from "@vercel/sdk/models/getvercelciinvocationop.js";

let value: GetVercelCiInvocationResponseBody = {
  invocation: {
    invocationId: "<id>",
    attempt: 5876.72,
    teamId: "<id>",
    source: {
      type: "vercel-native-checks",
      deploymentId: "<id>",
      projectId: "<id>",
      deploymentTargetSlug: "<value>",
    },
    createdAt: 3136.5,
    repositoryKey: "<value>",
    ref: "<value>",
    commitSha: "<value>",
    status: "jobs_on_hive_clone_dispatched",
  },
  repositories: {},
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `invocation`                                                                               | [models.GetVercelCiInvocationInvocation](../models/getvercelciinvocationinvocation.md)     | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `repositories`                                                                             | [models.GetVercelCiInvocationRepositories](../models/getvercelciinvocationrepositories.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |