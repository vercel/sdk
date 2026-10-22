# CreateDeploymentBuildMachineDefaultPurchaseType

The build machine tier included with the customer's plan. For most customers this is standard; enhanced entitlements include enhanced, while `none` means every build is billed at its purchase type.

## Example Usage

```typescript
import { CreateDeploymentBuildMachineDefaultPurchaseType } from "@vercel/sdk/models/createdeploymentvaluedeploymentsresponse200applicationjsonresponsebody2eq.js";

let value: CreateDeploymentBuildMachineDefaultPurchaseType = "standard";
```

## Values

```typescript
"basic" | "enhanced" | "none" | "standard"
```