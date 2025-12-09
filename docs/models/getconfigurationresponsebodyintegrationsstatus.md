# GetConfigurationResponseBodyIntegrationsStatus

The configuration status. Optional. If not defined, assume 'ready'.

## Example Usage

```typescript
import { GetConfigurationResponseBodyIntegrationsStatus } from "@vercel/sdk/models/getconfigurationop.js";

let value: GetConfigurationResponseBodyIntegrationsStatus = "resumed";
```

## Values

```typescript
"pending" | "ready" | "onboarding" | "suspended" | "resumed" | "error" | "uninstalled"
```