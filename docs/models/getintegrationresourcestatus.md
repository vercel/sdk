# GetIntegrationResourceStatus

The current status of the resource

## Example Usage

```typescript
import { GetIntegrationResourceStatus } from "@vercel/sdk/models/getintegrationresourceop.js";

let value: GetIntegrationResourceStatus = "pending";
```

## Values

```typescript
"ready" | "pending" | "onboarding" | "suspended" | "resumed" | "uninstalled" | "error"
```