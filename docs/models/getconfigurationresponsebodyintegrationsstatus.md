# GetConfigurationResponseBodyIntegrationsStatus

The configuration status. Optional. If not defined, assume 'ready'.

## Example Usage

```typescript
import { GetConfigurationResponseBodyIntegrationsStatus } from "@vercel/sdk/models/getconfigurationop.js";

let value: GetConfigurationResponseBodyIntegrationsStatus = "resumed";
```

## Values

```typescript
"error" | "onboarding" | "pending" | "ready" | "resumed" | "suspended" | "uninstalled"
```