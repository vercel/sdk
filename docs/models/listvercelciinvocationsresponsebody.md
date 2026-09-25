# ListVercelCiInvocationsResponseBody

Successfully listed invocations.

## Example Usage

```typescript
import { ListVercelCiInvocationsResponseBody } from "@vercel/sdk/models/listvercelciinvocationsop.js";

let value: ListVercelCiInvocationsResponseBody = {
  invocations: [
    {
      invocationId: "<id>",
      attempt: 9777.04,
      teamId: "<id>",
      source: {
        type: "vercel-native-checks",
        deploymentId: "<id>",
        projectId: "<id>",
        deploymentTargetSlug: "<value>",
      },
      createdAt: 4847.58,
      repositoryKey: "<value>",
      ref: "<value>",
      commitSha: "<value>",
      status: "completed",
    },
  ],
  repositories: {},
  pagination: {},
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `invocations`                                                                              | [models.Invocations](../models/invocations.md)[]                                           | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `repositories`                                                                             | [models.Repositories](../models/repositories.md)                                           | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `pagination`                                                                               | [models.ListVercelCiInvocationsPagination](../models/listvercelciinvocationspagination.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |