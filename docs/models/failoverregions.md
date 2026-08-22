# FailoverRegions

The regions the sandbox fails over to. Empty when it does not fail over.

## Example Usage

```typescript
import { FailoverRegions } from "@vercel/sdk/models/namedsandbox.js";

let value: FailoverRegions = "sfo1";
```

## Values

```typescript
"cdg1" | "cle1" | "iad1" | "sfo1"
```