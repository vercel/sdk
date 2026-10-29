# CreateDeploymentBuildMachinePurchaseType

Machine type purchased for this build. `basic` is the 2vCPU tier, recorded so the build pipeline can detect a basic build without consulting the project.

## Example Usage

```typescript
import { CreateDeploymentBuildMachinePurchaseType } from "@vercel/sdk/models/createdeploymentmissingdeploymentsresponse200type.js";

let value: CreateDeploymentBuildMachinePurchaseType = "turbo";
```

## Values

```typescript
"14cpu-28gb" | "basic" | "enhanced" | "standard" | "turbo"
```