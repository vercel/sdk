# GetProjectEnvResponseBodyProjectsResponseVisibility

User-facing config/secret model. When set, authoritative for new code paths. Legacy rows omit this field and callers fall back to existing `type` behavior.

## Example Usage

```typescript
import { GetProjectEnvResponseBodyProjectsResponseVisibility } from "@vercel/sdk/models/getprojectenvop.js";

let value: GetProjectEnvResponseBodyProjectsResponseVisibility = "secret";
```

## Values

```typescript
"config" | "secret"
```