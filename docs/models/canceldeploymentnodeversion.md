# CancelDeploymentNodeVersion

If set it overrides the `projectSettings.nodeVersion` for this deployment.

## Example Usage

```typescript
import { CancelDeploymentNodeVersion } from "@vercel/sdk/models/canceldeploymentservicesdeploymentsbuilder.js";

let value: CancelDeploymentNodeVersion = "14.x";
```

## Values

```typescript
"10.x" | "12.x" | "14.x" | "16.x" | "18.x" | "20.x" | "22.x" | "24.x" | "8.10.x"
```