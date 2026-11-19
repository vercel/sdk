# UpdateAiGatewayVirtualModelConfigInferenceRegion

The region that requests are pinned to. `null` removes the stored value.

## Example Usage

```typescript
import { UpdateAiGatewayVirtualModelConfigInferenceRegion } from "@vercel/sdk/models/updateaigatewayvirtualmodelconfigop.js";

let value: UpdateAiGatewayVirtualModelConfigInferenceRegion = {};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `scope`                                                                                                                      | [models.UpdateAiGatewayVirtualModelConfigScope](../models/updateaigatewayvirtualmodelconfigscope.md)                         | :heavy_minus_sign:                                                                                                           | The pin scope: `zone` (a geo zone) or `global`.                                                                              |
| `geoRegion`                                                                                                                  | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | The geo zone, for example `us` or `eu`. Required when `scope` is `zone`.                                                     |
| `providers`                                                                                                                  | Record<string, [models.UpdateAiGatewayVirtualModelConfigProviders](../models/updateaigatewayvirtualmodelconfigproviders.md)> | :heavy_minus_sign:                                                                                                           | Region overrides for each provider, keyed by provider slug.                                                                  |