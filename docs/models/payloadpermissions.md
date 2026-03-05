# PayloadPermissions

## Example Usage

```typescript
import { PayloadPermissions } from "@vercel/sdk/models/userevent.js";

let value: PayloadPermissions = "read-write:billing";
```

## Values

```typescript
"read:domain" | "read-write:domain" | "read:team" | "read:billing" | "read-write:billing" | "read-write:ai-gateway-api-key" | "read-write:project-env-vars" | "read-write:drains" | "read-write:edge-config" | "read:monitoring" | "read:project" | "read-write:project" | "read:deployment" | "read-write:deployment"
```