# EditProjectEnvVisibility

User-facing config/secret model. When set, authoritative for new code paths. Legacy rows omit this field and callers fall back to existing `type` behavior.

## Example Usage

```typescript
import { EditProjectEnvVisibility } from "@vercel/sdk/models/editprojectenvop.js";

let value: EditProjectEnvVisibility = "secret";
```

## Values

```typescript
"config" | "secret"
```