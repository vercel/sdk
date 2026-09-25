# GetDeploymentResponseBodyDefaultPurchaseType

The build machine tier included with the customer's plan. For most customers this is standard; enhanced entitlements include enhanced, while `none` means every build is billed at its purchase type.

## Example Usage

```typescript
import { GetDeploymentResponseBodyDefaultPurchaseType } from "@vercel/sdk/models/getdeploymentservicesdeploymentsmiddlewarematcher.js";

let value: GetDeploymentResponseBodyDefaultPurchaseType = "none";
```

## Values

```typescript
"basic" | "enhanced" | "none" | "standard"
```