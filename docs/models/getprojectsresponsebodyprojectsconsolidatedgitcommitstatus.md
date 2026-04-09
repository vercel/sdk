# GetProjectsResponseBodyProjectsConsolidatedGitCommitStatus

Configuration for consolidated git commit status reporting. When enabled, Vercel will post a single consolidated commit status instead of individual statuses for each deployment.

## Example Usage

```typescript
import { GetProjectsResponseBodyProjectsConsolidatedGitCommitStatus } from "@vercel/sdk/models/getprojectsrouteprojectsresponse200applicationjsonresponsebody2.js";

let value: GetProjectsResponseBodyProjectsConsolidatedGitCommitStatus = {
  enabled: true,
  propagateFailures: false,
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `enabled`                                                                       | *boolean*                                                                       | :heavy_check_mark:                                                              | Whether consolidated commit status is enabled.                                  |
| `propagateFailures`                                                             | *boolean*                                                                       | :heavy_check_mark:                                                              | Whether to propagate individual deployment failures to the consolidated status. |