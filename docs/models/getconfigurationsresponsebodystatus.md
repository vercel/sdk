# GetConfigurationsResponseBodyStatus

The configuration status. Optional. If not defined, assume 'ready'.

## Example Usage

```typescript
import { GetConfigurationsResponseBodyStatus } from "@vercel/sdk/models/getconfigurationsop.js";

let value: GetConfigurationsResponseBodyStatus = "onboarding";
```

## Values

```typescript
"error" | "ready" | "pending" | "onboarding" | "suspended" | "resumed" | "uninstalled"
```