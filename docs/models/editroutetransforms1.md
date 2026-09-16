# EditRouteTransforms1

## Example Usage

```typescript
import { EditRouteTransforms1 } from "@vercel/sdk/models/editrouteop.js";

let value: EditRouteTransforms1 = {
  op: "set",
  target: {
    key: {},
  },
  type: "response.headers",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `args`                                                                     | *models.EditRouteTransformsArgs*                                           | :heavy_minus_sign:                                                         | N/A                                                                        |
| `env`                                                                      | *string*[]                                                                 | :heavy_minus_sign:                                                         | N/A                                                                        |
| `op`                                                                       | [models.EditRouteTransformsOp](../models/editroutetransformsop.md)         | :heavy_check_mark:                                                         | N/A                                                                        |
| `target`                                                                   | [models.EditRouteTransformsTarget](../models/editroutetransformstarget.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `type`                                                                     | [models.EditRouteTransformsType](../models/editroutetransformstype.md)     | :heavy_check_mark:                                                         | N/A                                                                        |