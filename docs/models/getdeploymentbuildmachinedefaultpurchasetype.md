# GetDeploymentBuildMachineDefaultPurchaseType

The build machine tier included with the customer's plan. For most customers this is standard; enhanced entitlements include enhanced, while `none` means every build is billed at its purchase type.

## Example Usage

```typescript
import { GetDeploymentBuildMachineDefaultPurchaseType } from "@vercel/sdk/models/getdeploymentservicesresources.js";

let value: GetDeploymentBuildMachineDefaultPurchaseType = "none";
```

## Values

```typescript
"basic" | "enhanced" | "none" | "standard"
```