# UpdateAiGatewayVirtualModelConfigProviders

## Example Usage

```typescript
import { UpdateAiGatewayVirtualModelConfigProviders } from "@vercel/sdk/models/updateaigatewayvirtualmodelconfigop.js";

let value: UpdateAiGatewayVirtualModelConfigProviders = {};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `scope`                                                                                                                | [models.UpdateAiGatewayVirtualModelConfigAiGatewayScope](../models/updateaigatewayvirtualmodelconfigaigatewayscope.md) | :heavy_minus_sign:                                                                                                     | The pin scope: `zone` (a geo zone) or `global`.                                                                        |
| `geoRegion`                                                                                                            | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | The geo zone, for example `us` or `eu`. Required when `scope` is `zone`.                                               |