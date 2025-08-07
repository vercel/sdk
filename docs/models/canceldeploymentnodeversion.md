# CancelDeploymentNodeVersion

If set it overrides the `projectSettings.nodeVersion` for this deployment.

## Example Usage

```typescript
import { CancelDeploymentNodeVersion } from "@vercel/sdk/models/canceldeploymentop.js";

let value: CancelDeploymentNodeVersion = "18.x";
```

## Values

```typescript
"22.x" | "20.x" | "18.x" | "16.x" | "14.x" | "12.x" | "10.x" | "8.10.x"
```