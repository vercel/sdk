# Origin

How the token was issued. Always `'manual'` for explicit PAT creation.

## Example Usage

```typescript
import { Origin } from "@vercel/sdk/models/twohundredandseventyfour.js";

let value: Origin = "email";
```

## Values

```typescript
"email" | "saml" | "app" | "github" | "gitlab" | "bitbucket" | "google" | "apple" | "chatgpt" | "github-webhook" | "manual" | "passkey" | "otp" | "sms" | "invite" | "emu"
```