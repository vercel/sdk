# GetProjectServiceType

Service kind (Service.type). Omitted for schemas that do not define one.

## Example Usage

```typescript
import { GetProjectServiceType } from "@vercel/sdk/models/getprojecttargets.js";

let value: GetProjectServiceType = "job";
```

## Values

```typescript
"cron" | "job" | "web" | "worker"
```