# UpdateMicrofrontendsVisibility

User-facing config/secret model. When set, authoritative for new code paths. Legacy rows omit this field and callers fall back to existing `type` behavior.

## Example Usage

```typescript
import { UpdateMicrofrontendsVisibility } from "@vercel/sdk/models/updatemicrofrontendscreatedeployments.js";

let value: UpdateMicrofrontendsVisibility = "secret";
```

## Values

```typescript
"config" | "secret"
```