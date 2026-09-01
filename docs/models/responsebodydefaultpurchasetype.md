# ResponseBodyDefaultPurchaseType

The default plan type for the build machine — what the customer is *paying* for on their plan. For most customers, this is standard, but some customers have an entitlement for enhanced builds.

## Example Usage

```typescript
import { ResponseBodyDefaultPurchaseType } from "@vercel/sdk/models/createdeploymentvaluedeploymentseq.js";

let value: ResponseBodyDefaultPurchaseType = "basic";
```

## Values

```typescript
"basic" | "enhanced" | "standard"
```