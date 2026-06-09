# GetConfigurationsResponseBodyStatus

The configuration status. Optional. If not defined, assume 'ready'.

## Example Usage

```typescript
import { GetConfigurationsResponseBodyStatus } from "@vercel/sdk/models/getconfigurationsop.js";

let value: GetConfigurationsResponseBodyStatus = "ready";
```

## Values

```typescript
"error" | "onboarding" | "pending" | "ready" | "resumed" | "suspended" | "uninstalled"
```