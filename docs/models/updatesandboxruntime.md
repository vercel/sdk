# UpdateSandboxRuntime

The runtime environment for the sandbox. Determines the pre-installed language runtimes and tools available.

## Example Usage

```typescript
import { UpdateSandboxRuntime } from "@vercel/sdk/models/updatesandboxop.js";

let value: UpdateSandboxRuntime = "node24";
```

## Values

```typescript
"node22" | "node24" | "python3.13"
```