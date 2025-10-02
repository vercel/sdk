# GitSource3

## Example Usage

```typescript
import { GitSource3 } from "@vercel/sdk/models/createdeploymentop.js";

let value: GitSource3 = {
  ref: "main",
  repoId: 123456789,
  sha: "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0",
  type: "github-limited",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `ref`                                                                              | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                | main                                                                               |
| `repoId`                                                                           | *models.GitSourceRepoId*                                                           | :heavy_check_mark:                                                                 | N/A                                                                                | 123456789                                                                          |
| `sha`                                                                              | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                | a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0                                           |
| `type`                                                                             | [models.CreateDeploymentGitSourceType](../models/createdeploymentgitsourcetype.md) | :heavy_check_mark:                                                                 | N/A                                                                                |                                                                                    |