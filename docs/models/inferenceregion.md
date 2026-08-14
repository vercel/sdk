# InferenceRegion

Region pinned on the VMC for system-credential routing (alias/router only).

## Example Usage

```typescript
import { InferenceRegion } from "@vercel/sdk/models/aigatewayvirtualmodelconfig.js";

let value: InferenceRegion = {};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `providers`                                                                  | Record<string, [models.Providers](../models/providers.md)>                   | :heavy_minus_sign:                                                           | Per-provider region overrides keyed by provider slug.                        |
| `scope`                                                                      | [models.Scope](../models/scope.md)                                           | :heavy_minus_sign:                                                           | Pin scope: `specific` (one provider region), `zone` (geo zone), or `global`. |
| `geoRegion`                                                                  | *string*                                                                     | :heavy_minus_sign:                                                           | Geo zone (e.g. "us", "eu").                                                  |
| `providerRegion`                                                             | *string*                                                                     | :heavy_minus_sign:                                                           | Provider-specific region identifier.                                         |