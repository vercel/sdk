# GenerateRouteProjectRoutesConditions

## Example Usage

```typescript
import { GenerateRouteProjectRoutesConditions } from "@vercel/sdk/models/generaterouteop.js";

let value: GenerateRouteProjectRoutesConditions = {
  field: "query",
  operator: "re",
  missing: true,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `field`                                                      | [models.GenerateRouteField](../models/generateroutefield.md) | :heavy_check_mark:                                           | N/A                                                          |
| `operator`                                                   | [models.Operator](../models/operator.md)                     | :heavy_check_mark:                                           | N/A                                                          |
| `key`                                                        | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `value`                                                      | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `missing`                                                    | *boolean*                                                    | :heavy_check_mark:                                           | N/A                                                          |