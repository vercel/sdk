# GetIntegrationResourceStatus

The current status of the resource

## Example Usage

```typescript
import { GetIntegrationResourceStatus } from "@vercel/sdk/models/getintegrationresourceop.js";

let value: GetIntegrationResourceStatus = "ready";
```

## Values

```typescript
"error" | "ready" | "pending" | "onboarding" | "suspended" | "resumed" | "uninstalled"
```