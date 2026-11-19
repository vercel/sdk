# ModelsAtLeast

## Example Usage

```typescript
import { ModelsAtLeast } from "@vercel/sdk/models/createaigatewayvirtualmodelconfigop.js";

let value: ModelsAtLeast = {
  count: 994972,
  conditions: [
    {},
  ],
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `count`                                                                                                                      | *number*                                                                                                                     | :heavy_check_mark:                                                                                                           | Must not be more than the number of conditions.                                                                              |
| `conditions`                                                                                                                 | [models.CreateAiGatewayVirtualModelConfigModelsConditions](../models/createaigatewayvirtualmodelconfigmodelsconditions.md)[] | :heavy_check_mark:                                                                                                           | Nested conditions. Each one has the same shape as `when`.                                                                    |