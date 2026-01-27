# GetConfigurationResponseBodyIntegrationsResponseStatus

The configuration status. Optional. If not defined, assume 'ready'.

## Example Usage

```typescript
import { GetConfigurationResponseBodyIntegrationsResponseStatus } from "@vercel/sdk/models/getconfigurationop.js";

let value: GetConfigurationResponseBodyIntegrationsResponseStatus = "suspended";
```

## Values

```typescript
"error" | "ready" | "pending" | "onboarding" | "suspended" | "resumed" | "uninstalled"
```