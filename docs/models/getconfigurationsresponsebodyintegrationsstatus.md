# GetConfigurationsResponseBodyIntegrationsStatus

The configuration status. Optional. If not defined, assume 'ready'.

## Example Usage

```typescript
import { GetConfigurationsResponseBodyIntegrationsStatus } from "@vercel/sdk/models/getconfigurationsop.js";

let value: GetConfigurationsResponseBodyIntegrationsStatus = "uninstalled";
```

## Values

```typescript
"error" | "ready" | "pending" | "onboarding" | "suspended" | "resumed" | "uninstalled"
```