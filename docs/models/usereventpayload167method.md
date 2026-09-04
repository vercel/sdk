# UserEventPayload167Method

Method used for the state change - 'totp': User set up TOTP authenticator - 'passkey': User registered a passkey - 'user_disabled': User disabled their own MFA - 'admin_removal': Admin removed MFA via backoffice - 'self_serve_recovery': User disabled their own MFA through the self-serve MFA disable recovery flow (a "Locked Out User" with only a passkey) - 'unknown': Method unknown (for pre-tracking events)

## Example Usage

```typescript
import { UserEventPayload167Method } from "@vercel/sdk/models/payloadpreviousrule.js";

let value: UserEventPayload167Method = "totp";
```

## Values

```typescript
"admin_removal" | "passkey" | "self_serve_recovery" | "totp" | "unknown" | "user_disabled"
```