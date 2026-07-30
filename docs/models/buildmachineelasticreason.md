# BuildMachineElasticReason

## Example Usage

```typescript
import { BuildMachineElasticReason } from "@vercel/sdk/models/sandbox.js";

let value: BuildMachineElasticReason = "high-peak-memory";
```

## Values

```typescript
"oom-failure" | "enospc-failure" | "build-timeout-failure" | "high-peak-memory" | "sustained-high-cpu" | "high-peak-disk" | "long-build-duration" | "short-build-duration" | "enterprise-floor"
```