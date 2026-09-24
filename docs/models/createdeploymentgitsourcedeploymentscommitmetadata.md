# CreateDeploymentGitSourceDeploymentsCommitMetadata

## Example Usage

```typescript
import { CreateDeploymentGitSourceDeploymentsCommitMetadata } from "@vercel/sdk/models/createdeploymentgitsource1.js";

let value: CreateDeploymentGitSourceDeploymentsCommitMetadata = {
  author: {
    date: "2024-03-30",
    email: "Glen_Schmidt@hotmail.com",
    name: "<value>",
  },
  committer: {
    date: "2024-11-14",
    email: "Lauryn.Rippin@hotmail.com",
    name: "<value>",
  },
  message: "<value>",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `author`                                                                                                           | [models.CreateDeploymentGitSourceDeploymentsAuthor](../models/createdeploymentgitsourcedeploymentsauthor.md)       | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `committer`                                                                                                        | [models.CreateDeploymentGitSourceDeploymentsCommitter](../models/createdeploymentgitsourcedeploymentscommitter.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `message`                                                                                                          | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |