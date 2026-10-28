# BuildMachineSelectionSource

The setting which selected the build machine when the deployment was created. Frozen here so later project or team changes do not rewrite its history.

## Example Usage

```typescript
import { BuildMachineSelectionSource } from "@vercel/sdk/models/servicesdestination.js";

let value: BuildMachineSelectionSource = "elastic-algorithm";
```

## Values

```typescript
"deployment-override" | "elastic-algorithm" | "plan-default" | "project-setting" | "team-entitlement" | "team-setting"
```