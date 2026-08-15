# Scope

Pin scope: `specific` (one provider region), `zone` (geo zone), or `global`.

## Example Usage

```typescript
import { Scope } from "@vercel/sdk/models/aigatewayvirtualmodelconfig.js";

let value: Scope = "global";
```

## Values

```typescript
"global" | "specific" | "zone"
```