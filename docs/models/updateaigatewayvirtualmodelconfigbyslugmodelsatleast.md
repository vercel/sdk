# UpdateAiGatewayVirtualModelConfigBySlugModelsAtLeast

## Example Usage

```typescript
import { UpdateAiGatewayVirtualModelConfigBySlugModelsAtLeast } from "@vercel/sdk/models/updateaigatewayvirtualmodelconfigbyslugop.js";

let value: UpdateAiGatewayVirtualModelConfigBySlugModelsAtLeast = {
  count: 450786,
  conditions: [],
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `count`                                                                                                                                  | *number*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | Must not be more than the number of conditions.                                                                                          |
| `conditions`                                                                                                                             | [models.UpdateAiGatewayVirtualModelConfigBySlugModelsConditions](../models/updateaigatewayvirtualmodelconfigbyslugmodelsconditions.md)[] | :heavy_check_mark:                                                                                                                       | Nested conditions. Each one has the same shape as `when`.                                                                                |