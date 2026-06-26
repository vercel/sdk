# NextPermissions

## Example Usage

```typescript
import { NextPermissions } from "@vercel/sdk/models/userevent.js";

let value: NextPermissions = "read-write:domain-registrar";
```

## Values

```typescript
"*" | "read-write:ai-gateway-api-key" | "read-write:ai-gateway-private-models" | "read-write:ai-gateway-rules" | "read-write:alerts" | "read-write:billing" | "read-write:blob" | "read-write:deployment" | "read-write:domain" | "read-write:domain-registrar" | "read-write:drains" | "read-write:edge-cache" | "read-write:edge-config" | "read-write:integration-configuration" | "read-write:integration-resource" | "read-write:kms" | "read-write:project" | "read-write:project-env-vars" | "read-write:project-env-vars-non-production" | "read-write:project-env-vars-production" | "read-write:project-flags-non-production" | "read-write:project-flags-production" | "read-write:project-protection-bypass" | "read-write:remote-cache" | "read-write:sandbox" | "read:access-group" | "read:ai-gateway-private-models" | "read:ai-gateway-rules" | "read:alerts" | "read:billing" | "read:deployment" | "read:domain" | "read:event" | "read:integration-configuration" | "read:kms" | "read:monitoring" | "read:project" | "read:project-env-vars-non-production" | "read:project-env-vars-production" | "read:sandbox" | "read:team" | "read:user" | "use:ai-gateway"
```