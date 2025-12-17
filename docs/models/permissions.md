# Permissions

## Example Usage

```typescript
import { Permissions } from "@vercel/sdk/models/userevent.js";

let value: Permissions = "read:project";
```

## Values

```typescript
"*" | "read:user" | "read-write:user" | "read:domain" | "read-write:domain" | "read:team" | "read-write:team" | "read:billing" | "read-write:ai-gateway-api-key" | "read:project" | "read-write:project" | "read:deployment" | "read-write:deployment"
```