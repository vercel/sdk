# RemoveProjectEnvResponseBodyVisibility

User-facing config/secret model. When set, authoritative for new code paths. Legacy rows omit this field and callers fall back to existing `type` behavior.

## Example Usage

```typescript
import { RemoveProjectEnvResponseBodyVisibility } from "@vercel/sdk/models/removeprojectenvop.js";

let value: RemoveProjectEnvResponseBodyVisibility = "secret";
```

## Values

```typescript
"config" | "secret"
```