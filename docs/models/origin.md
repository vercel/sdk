# Origin

How the token was issued. Always `'manual'` for explicit PAT creation.

## Example Usage

```typescript
import { Origin } from "@vercel/sdk/models/threehundredandone.js";

let value: Origin = "app";
```

## Values

```typescript
"app" | "apple" | "bitbucket" | "chatgpt" | "email" | "emu" | "github" | "github-webhook" | "gitlab" | "google" | "invite" | "manual" | "otp" | "passkey" | "saml" | "sms" | "token-exchange-oidc"
```