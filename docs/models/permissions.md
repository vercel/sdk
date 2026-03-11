# Permissions

## Example Usage

```typescript
import { Permissions } from "@vercel/sdk/models/userevent.js";

let value: Permissions = "read:project";
```

## Values

```typescript
"*" | "read:user" | "read:domain" | "read-write:domain" | "read:team" | "read:billing" | "read-write:billing" | "read-write:ai-gateway-api-key" | "use:ai-gateway" | "read-write:project-env-vars" | "read-write:drains" | "read-write:edge-config" | "read:monitoring" | "read:access-group" | "read:project" | "read-write:project" | "read:deployment" | "read-write:deployment" | "read-write:edge-cache"
```