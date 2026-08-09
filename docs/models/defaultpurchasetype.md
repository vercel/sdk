# DefaultPurchaseType

The default plan type for the build machine — what the customer is *paying* for on their plan. For most customers, this is standard, but some customers have an entitlement for enhanced builds.

## Example Usage

```typescript
import { DefaultPurchaseType } from "@vercel/sdk/models/canceldeploymentservicesdeploymentsmaxduration.js";

let value: DefaultPurchaseType = "basic";
```

## Values

```typescript
"basic" | "enhanced" | "standard"
```