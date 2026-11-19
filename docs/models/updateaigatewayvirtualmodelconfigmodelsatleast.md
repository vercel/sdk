# UpdateAiGatewayVirtualModelConfigModelsAtLeast

## Example Usage

```typescript
import { UpdateAiGatewayVirtualModelConfigModelsAtLeast } from "@vercel/sdk/models/updateaigatewayvirtualmodelconfigop.js";

let value: UpdateAiGatewayVirtualModelConfigModelsAtLeast = {
  count: 139897,
  conditions: [
    {},
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `count`                                                    | *number*                                                   | :heavy_check_mark:                                         | Must not be more than the number of conditions.            |
| `conditions`                                               | [models.ModelsConditions](../models/modelsconditions.md)[] | :heavy_check_mark:                                         | Nested conditions. Each one has the same shape as `when`.  |