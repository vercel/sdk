# Permissions

## Example Usage

```typescript
import { Permissions } from "@vercel/sdk/models/userevent.js";

let value: Permissions = "read-write:project";
```

## Values

```typescript
"*" | "read:user" | "read:domain" | "read-write:domain" | "read:team" | "read:billing" | "read-write:billing" | "read-write:ai-gateway-api-key" | "read:project" | "read-write:project" | "read:deployment" | "read-write:deployment"
```