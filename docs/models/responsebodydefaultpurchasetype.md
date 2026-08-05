# ResponseBodyDefaultPurchaseType

The default plan type for the build machine — what the customer is *paying* for on their plan. For most customers, this is standard, but some customers have an entitlement for enhanced builds.

## Example Usage

```typescript
import { ResponseBodyDefaultPurchaseType } from "@vercel/sdk/models/createdeploymentvaluedeploymentsresponse2002.js";

let value: ResponseBodyDefaultPurchaseType = "enhanced";
```

## Values

```typescript
"enhanced" | "standard"
```