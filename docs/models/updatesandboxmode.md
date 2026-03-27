# UpdateSandboxMode

The network access policy mode. Use \"allow-all\" to permit all outbound traffic. Use \"deny-all\" to block all outbound traffic. Use \"custom\" to specify explicit allow/deny rules.

## Example Usage

```typescript
import { UpdateSandboxMode } from "@vercel/sdk/models/updatesandboxop.js";

let value: UpdateSandboxMode = "custom";
```

## Values

```typescript
"allow-all" | "deny-all" | "custom" | "default-allow" | "default-deny"
```