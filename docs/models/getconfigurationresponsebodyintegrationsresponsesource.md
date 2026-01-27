# GetConfigurationResponseBodyIntegrationsResponseSource

Source defines where the configuration was installed from. It is used to analyze user engagement for integration installations in product metrics.

## Example Usage

```typescript
import { GetConfigurationResponseBodyIntegrationsResponseSource } from "@vercel/sdk/models/getconfigurationop.js";

let value: GetConfigurationResponseBodyIntegrationsResponseSource =
  "marketplace";
```

## Values

```typescript
"marketplace" | "deploy-button" | "external" | "v0" | "resource-claims" | "cli" | "oauth" | "backoffice"
```