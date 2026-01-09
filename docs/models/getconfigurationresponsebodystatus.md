# GetConfigurationResponseBodyStatus

The configuration status. Optional. If not defined, assume 'ready'.

## Example Usage

```typescript
import { GetConfigurationResponseBodyStatus } from "@vercel/sdk/models/getconfigurationop.js";

let value: GetConfigurationResponseBodyStatus = "suspended";
```

## Values

```typescript
"error" | "ready" | "pending" | "onboarding" | "suspended" | "resumed" | "uninstalled"
```