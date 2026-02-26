# NextPermissions

## Example Usage

```typescript
import { NextPermissions } from "@vercel/sdk/models/userevent.js";

let value: NextPermissions = "read:domain";
```

## Values

```typescript
"*" | "read:user" | "read:domain" | "read-write:domain" | "read:team" | "read:billing" | "read-write:billing" | "read-write:ai-gateway-api-key" | "read:project" | "read-write:project" | "read:deployment" | "read-write:deployment"
```