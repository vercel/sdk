# ResponseBodyVisibility

User-facing config/secret model. When set, authoritative for new code paths when the env-var-config-secret-ui flag is enabled. Legacy rows omit this field; legacy rows omit it and callers fall back to existing `type` behavior.

## Example Usage

```typescript
import { ResponseBodyVisibility } from "@vercel/sdk/models/filterprojectenvsop.js";

let value: ResponseBodyVisibility = "secret";
```

## Values

```typescript
"config" | "secret"
```