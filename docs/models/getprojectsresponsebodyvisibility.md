# GetProjectsResponseBodyVisibility

User-facing config/secret model. When set, authoritative for new code paths. Legacy rows omit this field and callers fall back to existing `type` behavior.

## Example Usage

```typescript
import { GetProjectsResponseBodyVisibility } from "@vercel/sdk/models/getprojectslogheaders2.js";

let value: GetProjectsResponseBodyVisibility = "secret";
```

## Values

```typescript
"config" | "secret"
```