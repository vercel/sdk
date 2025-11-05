# Permissions

## Example Usage

```typescript
import { Permissions } from "@vercel/sdk/models/userevent.js";

let value: Permissions = "read-write:project";
```

## Values

```typescript
"*" | "read:user" | "read-write:user" | "read:domain" | "read-write:domain" | "read:team" | "read-write:team" | "read:billing" | "read:project" | "read-write:project" | "read:deployment" | "read-write:deployment"
```