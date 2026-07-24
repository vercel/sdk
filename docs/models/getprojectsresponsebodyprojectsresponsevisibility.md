# GetProjectsResponseBodyProjectsResponseVisibility

User-facing config/secret model. When set, authoritative for new code paths when the env-var-config-secret-ui flag is enabled. Legacy rows omit this field; legacy rows omit it and callers fall back to existing `type` behavior.

## Example Usage

```typescript
import { GetProjectsResponseBodyProjectsResponseVisibility } from "@vercel/sdk/models/getprojectsresponsebodyconsolidatedgitcommitstatus.js";

let value: GetProjectsResponseBodyProjectsResponseVisibility = "config";
```

## Values

```typescript
"config" | "secret"
```