# GetResourcesStatus

The current status of the resource

## Example Usage

```typescript
import { GetResourcesStatus } from "@vercel/sdk/models/getresourcesop.js";

let value: GetResourcesStatus = "pending";
```

## Values

```typescript
"ready" | "pending" | "suspended" | "resumed" | "uninstalled" | "error"
```