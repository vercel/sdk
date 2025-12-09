# GetConfigurationResponseBodyStatus

The configuration status. Optional. If not defined, assume 'ready'.

## Example Usage

```typescript
import { GetConfigurationResponseBodyStatus } from "@vercel/sdk/models/getconfigurationop.js";

let value: GetConfigurationResponseBodyStatus = "resumed";
```

## Values

```typescript
"pending" | "ready" | "onboarding" | "suspended" | "resumed" | "error" | "uninstalled"
```