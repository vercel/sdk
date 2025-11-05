# NextPermissions

## Example Usage

```typescript
import { NextPermissions } from "@vercel/sdk/models/userevent.js";

let value: NextPermissions = "read-write:user";
```

## Values

```typescript
"*" | "read:user" | "read-write:user" | "read:domain" | "read-write:domain" | "read:team" | "read-write:team" | "read:billing" | "read:project" | "read-write:project" | "read:deployment" | "read-write:deployment"
```