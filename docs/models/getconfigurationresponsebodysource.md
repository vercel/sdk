# GetConfigurationResponseBodySource

Source defines where the configuration was installed from. It is used to analyze user engagement for integration installations in product metrics.

## Example Usage

```typescript
import { GetConfigurationResponseBodySource } from "@vercel/sdk/models/getconfigurationop.js";

let value: GetConfigurationResponseBodySource = "marketplace";
```

## Values

```typescript
"backoffice" | "cli" | "deploy-button" | "external" | "marketplace" | "oauth" | "resource-claims" | "v0"
```