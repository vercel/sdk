# GetDeploymentGitSourceDeployments4

## Example Usage

```typescript
import { GetDeploymentGitSourceDeployments4 } from "@vercel/sdk/models/getdeploymentop.js";

let value: GetDeploymentGitSourceDeployments4 = {
  type: "github-custom-host",
  host: "short-bid.net",
  org: "<value>",
  repo: "<value>",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                             | [models.GetDeploymentGitSourceDeploymentsResponseType](../models/getdeploymentgitsourcedeploymentsresponsetype.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `host`                                                                                                             | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `org`                                                                                                              | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `repo`                                                                                                             | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `ref`                                                                                                              | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `sha`                                                                                                              | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `prId`                                                                                                             | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |