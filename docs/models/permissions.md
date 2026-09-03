# Permissions

## Example Usage

```typescript
import { Permissions } from "@vercel/sdk/models/ceilingmode.js";

let value: Permissions = "read:integration-resource";
```

## Values

```typescript
"*" | "manage:speed-insights" | "manage:web-analytics" | "read-write:ai-gateway-api-key" | "read-write:ai-gateway-guardrails" | "read-write:ai-gateway-private-models" | "read-write:ai-gateway-rules" | "read-write:ai-gateway-virtual-model-configs" | "read-write:alerts" | "read-write:billing" | "read-write:blob" | "read-write:connect" | "read-write:deployment" | "read-write:domain" | "read-write:domain-registrar" | "read-write:drains" | "read-write:edge-cache" | "read-write:edge-config" | "read-write:firewall" | "read-write:integration-configuration" | "read-write:integration-resource" | "read-write:kms" | "read-write:project" | "read-write:project-env-vars" | "read-write:project-env-vars-non-production" | "read-write:project-env-vars-production" | "read-write:project-flags-non-production" | "read-write:project-flags-production" | "read-write:project-protection-bypass" | "read-write:remote-cache" | "read-write:sandbox" | "read-write:team-members" | "read-write:vcr" | "read:access-group" | "read:ai-gateway-guardrails" | "read:ai-gateway-private-models" | "read:ai-gateway-rules" | "read:ai-gateway-virtual-model-configs" | "read:alerts" | "read:billing" | "read:deployment" | "read:domain" | "read:event" | "read:firewall" | "read:integration-configuration" | "read:integration-resource" | "read:kms" | "read:monitoring" | "read:project" | "read:project-env-vars-non-production" | "read:project-env-vars-production" | "read:project-flags" | "read:remote-cache" | "read:sandbox" | "read:speed-insights" | "read:team" | "read:user" | "read:vcr" | "read:web-analytics" | "use:ai-gateway"
```