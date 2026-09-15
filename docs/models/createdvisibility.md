# CreatedVisibility

User-facing config/secret model. When set, authoritative for new code paths. Legacy rows omit this field and callers fall back to existing `type` behavior.

## Example Usage

```typescript
import { CreatedVisibility } from "@vercel/sdk/models/createprojectenvop.js";

let value: CreatedVisibility = "config";
```

## Values

```typescript
"config" | "secret"
```