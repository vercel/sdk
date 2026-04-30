# UpdateNetworkPolicyMode

The network access policy mode. Use \"allow-all\" to permit all outbound traffic. Use \"deny-all\" to block all outbound traffic. Use \"custom\" to specify explicit allow/deny rules.

## Example Usage

```typescript
import { UpdateNetworkPolicyMode } from "@vercel/sdk/models/updatenetworkpolicyop.js";

let value: UpdateNetworkPolicyMode = "custom";
```

## Values

```typescript
"allow-all" | "deny-all" | "custom" | "default-allow" | "default-deny"
```