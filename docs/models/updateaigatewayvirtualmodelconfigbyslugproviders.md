# UpdateAiGatewayVirtualModelConfigBySlugProviders

## Example Usage

```typescript
import { UpdateAiGatewayVirtualModelConfigBySlugProviders } from "@vercel/sdk/models/updateaigatewayvirtualmodelconfigbyslugop.js";

let value: UpdateAiGatewayVirtualModelConfigBySlugProviders = {};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `scope`                                                                                                                            | [models.UpdateAiGatewayVirtualModelConfigBySlugAiGatewayScope](../models/updateaigatewayvirtualmodelconfigbyslugaigatewayscope.md) | :heavy_minus_sign:                                                                                                                 | The pin scope: `zone` (a geo zone) or `global`.                                                                                    |
| `geoRegion`                                                                                                                        | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | The geo zone, for example `us` or `eu`. Required when `scope` is `zone`.                                                           |