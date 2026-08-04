# GetDeploymentResponseBodyPurchaseType

Machine type which was purchased/selected for this build. `basic` is the 2vCPU tier, recorded on the deployment so the build pipeline can detect a basic build without consulting the project.

## Example Usage

```typescript
import { GetDeploymentResponseBodyPurchaseType } from "@vercel/sdk/models/getdeploymentgitsourcedeploymentsresponse200applicationjsonrepoid.js";

let value: GetDeploymentResponseBodyPurchaseType = "basic";
```

## Values

```typescript
"basic" | "enhanced" | "standard" | "turbo"
```