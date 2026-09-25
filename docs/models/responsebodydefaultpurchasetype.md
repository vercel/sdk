# ResponseBodyDefaultPurchaseType

The build machine tier included with the customer's plan. For most customers this is standard; enhanced entitlements include enhanced, while `none` means every build is billed at its purchase type.

## Example Usage

```typescript
import { ResponseBodyDefaultPurchaseType } from "@vercel/sdk/models/createdeploymentmissingdeploymentsresponse200applicationjsonresponsebodytype.js";

let value: ResponseBodyDefaultPurchaseType = "basic";
```

## Values

```typescript
"basic" | "enhanced" | "none" | "standard"
```