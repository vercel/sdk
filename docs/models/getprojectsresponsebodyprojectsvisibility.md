# GetProjectsResponseBodyProjectsVisibility

User-facing config/secret model. When set, authoritative for new code paths. Legacy rows omit this field and callers fall back to existing `type` behavior.

## Example Usage

```typescript
import { GetProjectsResponseBodyProjectsVisibility } from "@vercel/sdk/models/getprojectsresponsebodyprojectsconsolidatedgitcommitstatus.js";

let value: GetProjectsResponseBodyProjectsVisibility = "secret";
```

## Values

```typescript
"config" | "secret"
```