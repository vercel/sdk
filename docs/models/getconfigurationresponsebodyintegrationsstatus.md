# GetConfigurationResponseBodyIntegrationsStatus

The configuration status. Optional. If not defined, assume 'ready'.

## Example Usage

```typescript
import { GetConfigurationResponseBodyIntegrationsStatus } from "@vercel/sdk/models/getconfigurationop.js";

let value: GetConfigurationResponseBodyIntegrationsStatus = "suspended";
```

## Values

```typescript
"error" | "ready" | "pending" | "onboarding" | "suspended" | "resumed" | "uninstalled"
```