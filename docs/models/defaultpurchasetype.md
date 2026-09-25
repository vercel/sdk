# DefaultPurchaseType

The build machine tier included with the customer's plan. For most customers this is standard; enhanced entitlements include enhanced, while `none` means every build is billed at its purchase type.

## Example Usage

```typescript
import { DefaultPurchaseType } from "@vercel/sdk/models/servicesop.js";

let value: DefaultPurchaseType = "basic";
```

## Values

```typescript
"basic" | "enhanced" | "none" | "standard"
```