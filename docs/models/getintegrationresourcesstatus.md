# GetIntegrationResourcesStatus

The current status of the resource

## Example Usage

```typescript
import { GetIntegrationResourcesStatus } from "@vercel/sdk/models/getintegrationresourcesop.js";

let value: GetIntegrationResourcesStatus = "error";
```

## Values

```typescript
"ready" | "pending" | "onboarding" | "suspended" | "resumed" | "uninstalled" | "error"
```