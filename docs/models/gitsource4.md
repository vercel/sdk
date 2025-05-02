# GitSource4

## Example Usage

```typescript
import { GitSource4 } from "@vercel/sdk/models/createdeploymentop.js";

let value: GitSource4 = {
  projectId: 987654321,
  ref: "main",
  sha: "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0",
  type: "gitlab",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `projectId`                                                                                              | *models.ProjectId*                                                                                       | :heavy_check_mark:                                                                                       | N/A                                                                                                      | 987654321                                                                                                |
| `ref`                                                                                                    | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      | main                                                                                                     |
| `sha`                                                                                                    | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      | a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0                                                                 |
| `type`                                                                                                   | [models.CreateDeploymentGitSourceDeploymentsType](../models/createdeploymentgitsourcedeploymentstype.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |                                                                                                          |