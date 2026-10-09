# DeleteProjectAvatarVisibility

User-facing config/secret model. When set, authoritative for new code paths. Legacy rows omit this field and callers fall back to existing `type` behavior.

## Example Usage

```typescript
import { DeleteProjectAvatarVisibility } from "@vercel/sdk/models/deleteprojectavatarreadysubstate.js";

let value: DeleteProjectAvatarVisibility = "secret";
```

## Values

```typescript
"config" | "secret"
```