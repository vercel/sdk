# CreateDeploymentBuildMachineSelectionSource

The setting which selected the build machine when the deployment was created. Frozen here so later project or team changes do not rewrite its history.

## Example Usage

```typescript
import { CreateDeploymentBuildMachineSelectionSource } from "@vercel/sdk/models/createdeploymentmissingdeployments2.js";

let value: CreateDeploymentBuildMachineSelectionSource = "team-setting";
```

## Values

```typescript
"deployment-override" | "elastic-algorithm" | "plan-default" | "project-setting" | "team-entitlement" | "team-setting"
```