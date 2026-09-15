# CreateProjectEnvCreatedVisibility

User-facing config/secret model. When set, authoritative for new code paths. Legacy rows omit this field and callers fall back to existing `type` behavior.

## Example Usage

```typescript
import { CreateProjectEnvCreatedVisibility } from "@vercel/sdk/models/createprojectenvop.js";

let value: CreateProjectEnvCreatedVisibility = "config";
```

## Values

```typescript
"config" | "secret"
```