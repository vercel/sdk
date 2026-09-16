# GetDeploymentGitSourceDeployments3

## Example Usage

```typescript
import { GetDeploymentGitSourceDeployments3 } from "@vercel/sdk/models/getdeploymentservicesfunctions.js";

let value: GetDeploymentGitSourceDeployments3 = {
  host: "round-cop-out.net",
  repoId: "<id>",
  type: "github-custom-host",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `host`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `prId`                                                                                             | *number*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `ref`                                                                                              | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `repoId`                                                                                           | *models.GetDeploymentGitSourceDeploymentsResponse200ApplicationJSONResponseBodyRepoId*             | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `sha`                                                                                              | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `type`                                                                                             | [models.GetDeploymentGitSourceDeploymentsType](../models/getdeploymentgitsourcedeploymentstype.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |