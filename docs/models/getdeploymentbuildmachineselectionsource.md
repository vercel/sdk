# GetDeploymentBuildMachineSelectionSource

The setting which selected the build machine when the deployment was created. Frozen here so later project or team changes do not rewrite its history.

## Example Usage

```typescript
import { GetDeploymentBuildMachineSelectionSource } from "@vercel/sdk/models/getdeploymentservicesdeploymentsdaemon.js";

let value: GetDeploymentBuildMachineSelectionSource = "plan-default";
```

## Values

```typescript
"deployment-override" | "elastic-algorithm" | "plan-default" | "project-setting" | "team-entitlement" | "team-setting"
```