# GetDeploymentsChecks

Detailed information about v2 deployment checks. Includes information about blocked workflows in the deployment lifecycle.

## Example Usage

```typescript
import { GetDeploymentsChecks } from "@vercel/sdk/models/getdeploymentsop.js";

let value: GetDeploymentsChecks = {
  deploymentAlias: {
    state: "failed",
    startedAt: 8487.28,
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `deploymentAlias`                                                                                                          | [models.GetDeploymentsDeploymentAlias](../models/getdeploymentsdeploymentalias.md)                                         | :heavy_check_mark:                                                                                                         | Detailed information about v2 deployment checks. Includes information about blocked workflows in the deployment lifecycle. |