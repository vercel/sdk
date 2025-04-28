# GetDeploymentGitSourceDeployments3

## Example Usage

```typescript
import { GetDeploymentGitSourceDeployments3 } from "@vercel/sdk/models/getdeploymentop.js";

let value: GetDeploymentGitSourceDeployments3 = {
  type: "github-custom-host",
  host: "round-cop-out.net",
  repoId: "<id>",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `type`                                                                                             | [models.GetDeploymentGitSourceDeploymentsType](../models/getdeploymentgitsourcedeploymentstype.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `host`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `repoId`                                                                                           | *models.GetDeploymentGitSourceDeploymentsResponse200RepoId*                                        | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `ref`                                                                                              | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `sha`                                                                                              | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `prId`                                                                                             | *number*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |