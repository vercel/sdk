# GetProjectBuildMachineElasticReason

## Example Usage

```typescript
import { GetProjectBuildMachineElasticReason } from "@vercel/sdk/models/getprojecttargets.js";

let value: GetProjectBuildMachineElasticReason = "sustained-high-cpu";
```

## Values

```typescript
"build-timeout-failure" | "enospc-failure" | "enterprise-floor" | "high-peak-disk" | "high-peak-memory" | "long-build-duration" | "oom-failure" | "short-build-duration" | "sustained-high-cpu"
```