# PatchTeamDeploymentPolicy1

Composable deployment-time policy. Each rule key controls an independent restriction.

## Example Usage

```typescript
import { PatchTeamDeploymentPolicy1 } from "@vercel/sdk/models/patchteamop.js";

let value: PatchTeamDeploymentPolicy1 = {};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `gitSources`                                        | *models.PatchTeamDeploymentPolicyGitSources*        | :heavy_minus_sign:                                  | N/A                                                 |
| `deploymentSources`                                 | *models.PatchTeamDeploymentPolicyDeploymentSources* | :heavy_minus_sign:                                  | N/A                                                 |