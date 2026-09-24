# UploadProjectAvatarVisibility

User-facing config/secret model. When set, authoritative for new code paths. Legacy rows omit this field and callers fall back to existing `type` behavior.

## Example Usage

```typescript
import { UploadProjectAvatarVisibility } from "@vercel/sdk/models/uploadprojectavatargitprovideroptions.js";

let value: UploadProjectAvatarVisibility = "secret";
```

## Values

```typescript
"config" | "secret"
```