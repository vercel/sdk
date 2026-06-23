# DeploymentPolicy1

Composable deployment-time policy. Each rule type holds a list of rules, one per environment scope.

## Example Usage

```typescript
import { DeploymentPolicy1 } from "@vercel/sdk/models/updateprojectprojectspaths.js";

let value: DeploymentPolicy1 = {};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `gitSources`                               | *models.DeploymentPolicyGitSources*        | :heavy_minus_sign:                         | N/A                                        |
| `deploymentSources`                        | *models.DeploymentPolicyDeploymentSources* | :heavy_minus_sign:                         | N/A                                        |