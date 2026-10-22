# GetDeploymentBuildMachineDeploymentsPurchaseType

Machine type purchased for this build. `basic` is the 2vCPU tier, recorded so the build pipeline can detect a basic build without consulting the project.

## Example Usage

```typescript
import { GetDeploymentBuildMachineDeploymentsPurchaseType } from "@vercel/sdk/models/getdeploymentservicesdeploymentsdaemon.js";

let value: GetDeploymentBuildMachineDeploymentsPurchaseType = "turbo";
```

## Values

```typescript
"14cpu-28gb" | "basic" | "enhanced" | "standard" | "turbo"
```