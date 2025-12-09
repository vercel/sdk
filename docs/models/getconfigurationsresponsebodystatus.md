# GetConfigurationsResponseBodyStatus

The configuration status. Optional. If not defined, assume 'ready'.

## Example Usage

```typescript
import { GetConfigurationsResponseBodyStatus } from "@vercel/sdk/models/getconfigurationsop.js";

let value: GetConfigurationsResponseBodyStatus = "suspended";
```

## Values

```typescript
"pending" | "ready" | "onboarding" | "suspended" | "resumed" | "error" | "uninstalled"
```