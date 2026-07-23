# Destination

Tracing destination this rule applies to. Derived server-side when project tracing is computed; accepted here so a computed config can round-trip through this endpoint.

## Example Usage

```typescript
import { Destination } from "@vercel/sdk/models/updateprojectbranchmatcher.js";

let value: Destination = "internal";
```

## Values

```typescript
"internal" | "external"
```