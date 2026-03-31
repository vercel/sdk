# UpdateProjectConsolidatedGitCommitStatus

Configuration for consolidated git commit status reporting. When enabled, Vercel will post a single consolidated commit status instead of individual statuses for each deployment.

## Example Usage

```typescript
import { UpdateProjectConsolidatedGitCommitStatus } from "@vercel/sdk/models/updateprojectprojectsresponse200action.js";

let value: UpdateProjectConsolidatedGitCommitStatus = {
  enabled: false,
  propagateFailures: true,
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `enabled`                                                                       | *boolean*                                                                       | :heavy_check_mark:                                                              | Whether consolidated commit status is enabled.                                  |
| `propagateFailures`                                                             | *boolean*                                                                       | :heavy_check_mark:                                                              | Whether to propagate individual deployment failures to the consolidated status. |