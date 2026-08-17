# Providers

Per-provider region overrides keyed by provider slug.

## Example Usage

```typescript
import { Providers } from "@vercel/sdk/models/aigatewayvirtualmodelconfig.js";

let value: Providers = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `scope`                                                                                  | [models.AiGatewayVirtualModelConfigScope](../models/aigatewayvirtualmodelconfigscope.md) | :heavy_minus_sign:                                                                       | Pin scope: `specific` (one provider region), `zone` (geo zone), or `global`.             |
| `geoRegion`                                                                              | *string*                                                                                 | :heavy_minus_sign:                                                                       | Geo zone (e.g. "us", "eu").                                                              |
| `providerRegion`                                                                         | *string*                                                                                 | :heavy_minus_sign:                                                                       | Provider-specific region identifier.                                                     |