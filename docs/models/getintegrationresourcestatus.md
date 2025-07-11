# GetIntegrationResourceStatus

The current status of the resource

## Example Usage

```typescript
import { GetIntegrationResourceStatus } from "@vercel/sdk/models/getintegrationresourceop.js";

let value: GetIntegrationResourceStatus = "ready";
```

## Values

```typescript
"ready" | "pending" | "suspended" | "resumed" | "uninstalled" | "error"
```