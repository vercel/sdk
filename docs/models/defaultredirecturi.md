# DefaultRedirectUri

The default redirect URI to use after successful SAML authentication.

## Example Usage

```typescript
import { DefaultRedirectUri } from "@vercel/sdk/models/team.js";

let value: DefaultRedirectUri = "v0.dev";
```

## Values

```typescript
"v0.app" | "v0.dev" | "vercel.com"
```