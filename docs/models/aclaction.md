# ACLAction

Requested and authorized operations when `checkPermissions` is used. Legacy `includePermissions` responses contain a broader, non-authoritative permission summary.

## Example Usage

```typescript
import { ACLAction } from "@vercel/sdk/models/aclaction.js";

let value: ACLAction = "update";
```

## Values

```typescript
"create" | "delete" | "list" | "read" | "update"
```