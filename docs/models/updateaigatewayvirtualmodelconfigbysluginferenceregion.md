# UpdateAiGatewayVirtualModelConfigBySlugInferenceRegion

The region that requests are pinned to. `null` removes the stored value.

## Example Usage

```typescript
import { UpdateAiGatewayVirtualModelConfigBySlugInferenceRegion } from "@vercel/sdk/models/updateaigatewayvirtualmodelconfigbyslugop.js";

let value: UpdateAiGatewayVirtualModelConfigBySlugInferenceRegion = {};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `scope`                                                                                                                                  | [models.UpdateAiGatewayVirtualModelConfigBySlugScope](../models/updateaigatewayvirtualmodelconfigbyslugscope.md)                         | :heavy_minus_sign:                                                                                                                       | The pin scope: `zone` (a geo zone) or `global`.                                                                                          |
| `geoRegion`                                                                                                                              | *string*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | The geo zone, for example `us` or `eu`. Required when `scope` is `zone`.                                                                 |
| `providers`                                                                                                                              | Record<string, [models.UpdateAiGatewayVirtualModelConfigBySlugProviders](../models/updateaigatewayvirtualmodelconfigbyslugproviders.md)> | :heavy_minus_sign:                                                                                                                       | Region overrides for each provider, keyed by provider slug.                                                                              |