# CreateAiGatewayVirtualModelConfigProviders

## Example Usage

```typescript
import { CreateAiGatewayVirtualModelConfigProviders } from "@vercel/sdk/models/createaigatewayvirtualmodelconfigop.js";

let value: CreateAiGatewayVirtualModelConfigProviders = {};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `scope`                                                                                              | [models.CreateAiGatewayVirtualModelConfigScope](../models/createaigatewayvirtualmodelconfigscope.md) | :heavy_minus_sign:                                                                                   | The pin scope: `zone` (a geo zone) or `global`.                                                      |
| `geoRegion`                                                                                          | *string*                                                                                             | :heavy_minus_sign:                                                                                   | The geo zone, for example `us` or `eu`. Required when `scope` is `zone`.                             |