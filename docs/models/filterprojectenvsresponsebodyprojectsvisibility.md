# FilterProjectEnvsResponseBodyProjectsVisibility

User-facing config/secret model. When set, authoritative for new code paths. Legacy rows omit this field and callers fall back to existing `type` behavior.

## Example Usage

```typescript
import { FilterProjectEnvsResponseBodyProjectsVisibility } from "@vercel/sdk/models/filterprojectenvsop.js";

let value: FilterProjectEnvsResponseBodyProjectsVisibility = "secret";
```

## Values

```typescript
"config" | "secret"
```