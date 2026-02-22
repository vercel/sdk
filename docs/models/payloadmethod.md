# PayloadMethod

Method used for the state change - 'totp': User set up TOTP authenticator - 'passkey': User registered a passkey - 'user_disabled': User disabled their own MFA - 'admin_removal': Admin removed MFA via backoffice - 'unknown': Method unknown (for pre-tracking events)

## Example Usage

```typescript
import { PayloadMethod } from "@vercel/sdk/models/oldteam.js";

let value: PayloadMethod = "unknown";
```

## Values

```typescript
"totp" | "passkey" | "user_disabled" | "admin_removal" | "unknown"
```