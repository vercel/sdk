# GetResourceStatus

The current status of the resource

## Example Usage

```typescript
import { GetResourceStatus } from "@vercel/sdk/models/getresourceop.js";

let value: GetResourceStatus = "ready";
```

## Values

```typescript
"ready" | "pending" | "suspended" | "resumed" | "uninstalled" | "error"
```