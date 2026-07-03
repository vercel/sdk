# VcrTagStatus

VHS-readiness status, or `null` for a multi-platform index.

## Example Usage

```typescript
import { VcrTagStatus } from "@vercel/sdk/models/vcrtag.js";

let value: VcrTagStatus = "ready";
```

## Values

```typescript
"preparing" | "ready" | "unoptimized"
```