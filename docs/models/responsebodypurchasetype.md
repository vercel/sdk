# ResponseBodyPurchaseType

Machine type which was purchased/selected for this build. `basic` is the 2vCPU tier, recorded on the deployment so the build pipeline can detect a basic build without consulting the project.

## Example Usage

```typescript
import { ResponseBodyPurchaseType } from "@vercel/sdk/models/createdeploymenthas1.js";

let value: ResponseBodyPurchaseType = "enhanced";
```

## Values

```typescript
"basic" | "enhanced" | "standard" | "turbo"
```