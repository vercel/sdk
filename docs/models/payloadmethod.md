# PayloadMethod

Method used for the state change - 'totp': User set up TOTP authenticator - 'passkey': User registered a passkey - 'user_disabled': User disabled their own MFA - 'admin_removal': Admin removed MFA via backoffice - 'unknown': Method unknown (for pre-tracking events)

## Example Usage

```typescript
import { PayloadMethod } from "@vercel/sdk/models/ninetyfour.js";

let value: PayloadMethod = "user_disabled";
```

## Values

```typescript
"admin_removal" | "passkey" | "totp" | "unknown" | "user_disabled"
```