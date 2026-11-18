# CreateAiGatewayVirtualModelConfigInferenceRegion

The region that requests are pinned to.

## Example Usage

```typescript
import { CreateAiGatewayVirtualModelConfigInferenceRegion } from "@vercel/sdk/models/createaigatewayvirtualmodelconfigop.js";

let value: CreateAiGatewayVirtualModelConfigInferenceRegion = {};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `scope`                                                                                                                      | [models.CreateAiGatewayVirtualModelConfigAiGatewayScope](../models/createaigatewayvirtualmodelconfigaigatewayscope.md)       | :heavy_minus_sign:                                                                                                           | The pin scope: `zone` (a geo zone) or `global`.                                                                              |
| `geoRegion`                                                                                                                  | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | The geo zone, for example `us` or `eu`. Required when `scope` is `zone`.                                                     |
| `providers`                                                                                                                  | Record<string, [models.CreateAiGatewayVirtualModelConfigProviders](../models/createaigatewayvirtualmodelconfigproviders.md)> | :heavy_minus_sign:                                                                                                           | Region overrides for each provider, keyed by provider slug.                                                                  |