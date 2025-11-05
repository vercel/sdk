# CreateDeploymentNodeVersion

If set it overrides the `projectSettings.nodeVersion` for this deployment.

## Example Usage

```typescript
import { CreateDeploymentNodeVersion } from "@vercel/sdk/models/createdeploymentop.js";

let value: CreateDeploymentNodeVersion = "22.x";
```

## Values

```typescript
"24.x" | "22.x" | "20.x" | "18.x" | "16.x" | "14.x" | "12.x" | "10.x" | "8.10.x"
```