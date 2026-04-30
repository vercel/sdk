# Categories

The categories that group this event with related event types. An event can belong to multiple categories (e.g. a firewall event is both Firewall and Security). The first entry is the "primary" category. Use the `/events/types` endpoint to discover the full list of categories.

## Example Usage

```typescript
import { Categories } from "@vercel/sdk/models/environment.js";

let value: Categories = "deployment";
```

## Values

```typescript
"account" | "ai" | "ai-gateway" | "billing" | "deployment" | "domain" | "edge" | "env-variable" | "feature-flags" | "firewall" | "integration" | "microfrontends" | "network" | "observability" | "project" | "security" | "storage" | "team" | "v0" | "vercel-app" | "workflow" | "other"
```