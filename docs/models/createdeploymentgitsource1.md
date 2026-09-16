# CreateDeploymentGitSource1

## Example Usage

```typescript
import { CreateDeploymentGitSource1 } from "@vercel/sdk/models/createdeploymentresponsebodydeploymentsstatus.js";

let value: CreateDeploymentGitSource1 = {
  repoId: 9621.35,
  type: "github",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `prId`                                                                                                                   | *number*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `ref`                                                                                                                    | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `repoId`                                                                                                                 | *models.CreateDeploymentGitSourceRepoId*                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `sha`                                                                                                                    | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `type`                                                                                                                   | [models.CreateDeploymentGitSourceDeploymentsResponseType](../models/createdeploymentgitsourcedeploymentsresponsetype.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |