# CreateProjectVisibility

User-facing config/secret model. When set, authoritative for new code paths. Legacy rows omit this field and callers fall back to existing `type` behavior.

## Example Usage

```typescript
import { CreateProjectVisibility } from "@vercel/sdk/models/createprojectprojectsresponse200applicationjsonresponsebodytargetstype.js";

let value: CreateProjectVisibility = "secret";
```

## Values

```typescript
"config" | "secret"
```