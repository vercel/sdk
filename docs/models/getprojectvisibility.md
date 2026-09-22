# GetProjectVisibility

User-facing config/secret model. When set, authoritative for new code paths. Legacy rows omit this field and callers fall back to existing `type` behavior.

## Example Usage

```typescript
import { GetProjectVisibility } from "@vercel/sdk/models/getprojectintegrations.js";

let value: GetProjectVisibility = "secret";
```

## Values

```typescript
"config" | "secret"
```