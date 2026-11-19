# Origin

How the token was issued. Always `'manual'` for explicit PAT creation.

## Example Usage

```typescript
import { Origin } from "@vercel/sdk/models/payloadoutcome.js";

let value: Origin = "app";
```

## Values

```typescript
"app" | "apple" | "bitbucket" | "chatgpt" | "claude" | "email" | "emu" | "github" | "github-webhook" | "gitlab" | "google" | "invite" | "manual" | "otp" | "passkey" | "saml" | "sms" | "token-exchange-oidc"
```