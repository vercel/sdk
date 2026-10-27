# CreateDeploymentBuildMachineDefaultPurchaseType

The build machine tier included with the customer's plan. For most customers this is standard; enhanced entitlements include enhanced, while `none` means every build is billed at its purchase type.

## Example Usage

```typescript
import { CreateDeploymentBuildMachineDefaultPurchaseType } from "@vercel/sdk/models/createdeploymentmissingdeployments2.js";

let value: CreateDeploymentBuildMachineDefaultPurchaseType = "standard";
```

## Values

```typescript
"basic" | "enhanced" | "none" | "standard"
```