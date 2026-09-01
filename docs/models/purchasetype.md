# PurchaseType

Machine type which was purchased/selected for this build. `basic` is the 2vCPU tier, recorded on the deployment so the build pipeline can detect a basic build without consulting the project.

## Example Usage

```typescript
import { PurchaseType } from "@vercel/sdk/models/destinationtype.js";

let value: PurchaseType = "standard";
```

## Values

```typescript
"basic" | "enhanced" | "standard" | "turbo"
```