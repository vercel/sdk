# GetConfigurationResponseBodyIntegrationsInstallationType

Defines the installation type. - 'external' integrations are installed via the existing integrations flow - 'marketplace' integrations are natively installed: - when accepting the TOS of a partner during the store creation process - if undefined, assume 'external'

## Example Usage

```typescript
import { GetConfigurationResponseBodyIntegrationsInstallationType } from "@vercel/sdk/models/operations/getconfiguration.js";

let value: GetConfigurationResponseBodyIntegrationsInstallationType =
  "external";
```

## Values

```typescript
"marketplace" | "external"
```