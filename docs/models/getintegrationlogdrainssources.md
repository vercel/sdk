# GetIntegrationLogDrainsSources

The sources from which logs are currently being delivered to this log drain.

## Example Usage

```typescript
import { GetIntegrationLogDrainsSources } from "@vercel/sdk/models/getintegrationlogdrainsop.js";

let value: GetIntegrationLogDrainsSources = "static";
```

## Values

```typescript
"build" | "edge" | "lambda" | "static" | "external" | "firewall"
```