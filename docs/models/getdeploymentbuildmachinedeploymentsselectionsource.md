# GetDeploymentBuildMachineDeploymentsSelectionSource

The setting which selected the build machine when the deployment was created. Frozen here so later project or team changes do not rewrite its history.

## Example Usage

```typescript
import { GetDeploymentBuildMachineDeploymentsSelectionSource } from "@vercel/sdk/models/getdeploymentservicesresources.js";

let value: GetDeploymentBuildMachineDeploymentsSelectionSource =
  "deployment-override";
```

## Values

```typescript
"deployment-override" | "elastic-algorithm" | "plan-default" | "project-setting" | "team-entitlement" | "team-setting"
```