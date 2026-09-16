# GetMicrofrontendsInGroupVisibility

User-facing config/secret model. When set, authoritative for new code paths. Legacy rows omit this field and callers fall back to existing `type` behavior.

## Example Usage

```typescript
import { GetMicrofrontendsInGroupVisibility } from "@vercel/sdk/models/getmicrofrontendsingrouphasvalue.js";

let value: GetMicrofrontendsInGroupVisibility = "config";
```

## Values

```typescript
"config" | "secret"
```