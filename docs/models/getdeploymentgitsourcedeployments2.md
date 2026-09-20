# GetDeploymentGitSourceDeployments2

## Example Usage

```typescript
import { GetDeploymentGitSourceDeployments2 } from "@vercel/sdk/models/getdeploymentmaxdurationdeployments2.js";

let value: GetDeploymentGitSourceDeployments2 = {
  org: "<value>",
  repo: "<value>",
  type: "github",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `org`                                                                        | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `prId`                                                                       | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `ref`                                                                        | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `repo`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `sha`                                                                        | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `type`                                                                       | [models.GetDeploymentGitSourceType](../models/getdeploymentgitsourcetype.md) | :heavy_check_mark:                                                           | N/A                                                                          |