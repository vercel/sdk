# GetDeploymentResponseBodySelectionSource

The setting which selected the build machine when the deployment was created. Frozen here so later project or team changes do not rewrite its history.

## Example Usage

```typescript
import { GetDeploymentResponseBodySelectionSource } from "@vercel/sdk/models/getdeploymentservicesdeploymentsmiddlewarematcher.js";

let value: GetDeploymentResponseBodySelectionSource = "team-entitlement";
```

## Values

```typescript
"deployment-override" | "elastic-algorithm" | "plan-default" | "project-setting" | "team-entitlement" | "team-setting"
```