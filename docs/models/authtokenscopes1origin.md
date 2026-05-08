# AuthTokenScopes1Origin

Possible step-up auth origins

## Example Usage

```typescript
import { AuthTokenScopes1Origin } from "@vercel/sdk/models/authtoken.js";

let value: AuthTokenScopes1Origin = "recovery-code";
```

## Values

```typescript
"otp" | "totp" | "webauthn" | "recovery-code" | "email-otp"
```