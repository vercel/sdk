# CreateDeploymentBuildMachineDeploymentsSelectionSource

The setting which selected the build machine when the deployment was created. Frozen here so later project or team changes do not rewrite its history.

## Example Usage

```typescript
import { CreateDeploymentBuildMachineDeploymentsSelectionSource } from "@vercel/sdk/models/createdeploymentvaluedeploymentsresponse200applicationjsonresponsebody2eq.js";

let value: CreateDeploymentBuildMachineDeploymentsSelectionSource =
  "plan-default";
```

## Values

```typescript
"deployment-override" | "elastic-algorithm" | "plan-default" | "project-setting" | "team-entitlement" | "team-setting"
```