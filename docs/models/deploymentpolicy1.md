# DeploymentPolicy1

Composable deployment-time policy. Each rule key controls an independent restriction.

## Example Usage

```typescript
import { DeploymentPolicy1 } from "@vercel/sdk/models/updateprojectprojectsresponsebuildmachineselection.js";

let value: DeploymentPolicy1 = {};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `gitSources`                               | *models.DeploymentPolicyGitSources*        | :heavy_minus_sign:                         | N/A                                        |
| `deploymentSources`                        | *models.DeploymentPolicyDeploymentSources* | :heavy_minus_sign:                         | N/A                                        |
| `publicDeployments`                        | *models.DeploymentPolicyPublicDeployments* | :heavy_minus_sign:                         | N/A                                        |