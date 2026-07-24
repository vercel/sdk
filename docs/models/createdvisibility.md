# CreatedVisibility

User-facing config/secret model. When set, authoritative for new code paths when the env-var-config-secret-ui flag is enabled. Legacy rows omit this field; legacy rows omit it and callers fall back to existing `type` behavior.

## Example Usage

```typescript
import { CreatedVisibility } from "@vercel/sdk/models/createprojectenvop.js";

let value: CreatedVisibility = "config";
```

## Values

```typescript
"config" | "secret"
```