# RemoveProjectEnvResponseBodyProjectsVisibility

User-facing config/secret model. When set, authoritative for new code paths when the env-var-config-secret-ui flag is enabled. Legacy rows omit this field; legacy rows omit it and callers fall back to existing `type` behavior.

## Example Usage

```typescript
import { RemoveProjectEnvResponseBodyProjectsVisibility } from "@vercel/sdk/models/removeprojectenvop.js";

let value: RemoveProjectEnvResponseBodyProjectsVisibility = "config";
```

## Values

```typescript
"config" | "secret"
```