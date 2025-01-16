# ProtectionMode

exclusive: ip match is enough to bypass deployment protection (regardless of other settings). additional: ip must match + any other protection should be also provided (password, vercel auth, shareable link, automation bypass header, automation bypass query param)

## Example Usage

```typescript
import { ProtectionMode } from "@vercel/sdk/models/updateprojectop.js";

let value: ProtectionMode = "exclusive";
```

## Values

```typescript
"exclusive" | "additional"
```