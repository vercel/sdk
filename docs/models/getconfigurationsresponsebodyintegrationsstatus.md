# GetConfigurationsResponseBodyIntegrationsStatus

The configuration status. Optional. If not defined, assume 'ready'.

## Example Usage

```typescript
import { GetConfigurationsResponseBodyIntegrationsStatus } from "@vercel/sdk/models/getconfigurationsop.js";

let value: GetConfigurationsResponseBodyIntegrationsStatus = "uninstalled";
```

## Values

```typescript
"pending" | "ready" | "onboarding" | "suspended" | "resumed" | "error" | "uninstalled"
```