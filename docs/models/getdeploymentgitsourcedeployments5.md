# GetDeploymentGitSourceDeployments5

## Example Usage

```typescript
import { GetDeploymentGitSourceDeployments5 } from "@vercel/sdk/models/getdeploymentop.js";

let value: GetDeploymentGitSourceDeployments5 = {
  type: "gitlab",
  projectId: 8837.73,
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                   | [models.GetDeploymentGitSourceDeploymentsResponse200Type](../models/getdeploymentgitsourcedeploymentsresponse200type.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `projectId`                                                                                                              | *models.GetDeploymentGitSourceProjectId*                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `ref`                                                                                                                    | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `sha`                                                                                                                    | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `prId`                                                                                                                   | *number*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |