# PayloadMethod

Method used for the state change - 'totp': User set up TOTP authenticator - 'passkey': User registered a passkey - 'user_disabled': User disabled their own MFA - 'admin_removal': Admin removed MFA via backoffice - 'self_serve_recovery': User disabled their own MFA through the self-serve MFA disable recovery flow (a "Locked Out User" with only a passkey) - 'unknown': Method unknown (for pre-tracking events)

## Example Usage

```typescript
import { PayloadMethod } from "@vercel/sdk/models/onehundredandfortyfour.js";

let value: PayloadMethod = "user_disabled";
```

## Values

```typescript
"admin_removal" | "passkey" | "self_serve_recovery" | "totp" | "unknown" | "user_disabled"
```