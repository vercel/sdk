# GetVercelCiInvocationTreeResponseBody

Successfully fetched the invocation tree.

## Example Usage

```typescript
import { GetVercelCiInvocationTreeResponseBody } from "@vercel/sdk/models/getvercelciinvocationtreeop.js";

let value: GetVercelCiInvocationTreeResponseBody = {
  invocation: {
    invocationId: "<id>",
    attempt: 247.76,
    teamId: "<id>",
    source: {
      type: "vercel-native-checks",
      deploymentId: "<id>",
      projectId: "<id>",
      deploymentTargetSlug: "<value>",
    },
    createdAt: 4348.55,
    repositoryKey: "<value>",
    ref: "<value>",
    commitSha: "<value>",
    status: "snapshotted",
  },
  repositories: {},
  jobs: [],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `invocation`                                                                                       | [models.Invocation](../models/invocation.md)                                                       | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `repositories`                                                                                     | [models.GetVercelCiInvocationTreeRepositories](../models/getvercelciinvocationtreerepositories.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `jobs`                                                                                             | [models.GetVercelCiInvocationTreeJobs](../models/getvercelciinvocationtreejobs.md)[]               | :heavy_check_mark:                                                                                 | N/A                                                                                                |