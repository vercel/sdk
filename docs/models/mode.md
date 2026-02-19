# Mode

The network policy mode. - 'allow-all': All traffic is allowed. - 'deny-all': All traffic is blocked. - 'custom': Traffic is controlled by explicit allow/deny rules.

## Example Usage

```typescript
import { Mode } from "@vercel/sdk/models/sandboxnetworkpolicy.js";

let value: Mode = "custom";
```

## Values

```typescript
"allow-all" | "deny-all" | "custom"
```