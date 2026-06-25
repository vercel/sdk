# EditRouteTransforms1

## Example Usage

```typescript
import { EditRouteTransforms1 } from "@vercel/sdk/models/editrouteop.js";

let value: EditRouteTransforms1 = {
  type: "response.headers",
  op: "delete",
  target: {
    key: {},
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `type`                                                                     | [models.EditRouteTransformsType](../models/editroutetransformstype.md)     | :heavy_check_mark:                                                         | N/A                                                                        |
| `op`                                                                       | [models.EditRouteTransformsOp](../models/editroutetransformsop.md)         | :heavy_check_mark:                                                         | N/A                                                                        |
| `target`                                                                   | [models.EditRouteTransformsTarget](../models/editroutetransformstarget.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `args`                                                                     | *models.EditRouteTransformsArgs*                                           | :heavy_minus_sign:                                                         | N/A                                                                        |
| `env`                                                                      | *string*[]                                                                 | :heavy_minus_sign:                                                         | N/A                                                                        |