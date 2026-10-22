# BuildMachinePurchaseType

Machine type purchased for this build. `basic` is the 2vCPU tier, recorded so the build pipeline can detect a basic build without consulting the project.

## Example Usage

```typescript
import { BuildMachinePurchaseType } from "@vercel/sdk/models/canceldeploymenthasdeploymentsresponse2.js";

let value: BuildMachinePurchaseType = "basic";
```

## Values

```typescript
"14cpu-28gb" | "basic" | "enhanced" | "standard" | "turbo"
```