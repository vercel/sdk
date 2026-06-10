# Permissions

## Example Usage

```typescript
import { Permissions } from "@vercel/sdk/models/userevent.js";

let value: Permissions = "read:integration-configuration";
```

## Values

```typescript
"*" | "read-write:ai-gateway-api-key" | "read-write:alerts" | "read-write:billing" | "read-write:blob" | "read-write:deployment" | "read-write:domain" | "read-write:domain-registrar" | "read-write:drains" | "read-write:edge-cache" | "read-write:edge-config" | "read-write:integration-configuration" | "read-write:integration-resource" | "read-write:kms" | "read-write:project" | "read-write:project-env-vars" | "read-write:project-env-vars-non-production" | "read-write:project-env-vars-production" | "read-write:project-flags-non-production" | "read-write:project-flags-production" | "read-write:project-protection-bypass" | "read-write:remote-cache" | "read-write:sandbox" | "read:access-group" | "read:alerts" | "read:billing" | "read:deployment" | "read:domain" | "read:event" | "read:integration-configuration" | "read:kms" | "read:monitoring" | "read:project" | "read:project-env-vars-non-production" | "read:project-env-vars-production" | "read:sandbox" | "read:team" | "read:user" | "use:ai-gateway"
```