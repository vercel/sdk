# AddRouteTransforms1

## Example Usage

```typescript
import { AddRouteTransforms1 } from "@vercel/sdk/models/addrouteop.js";

let value: AddRouteTransforms1 = {
  op: "delete",
  target: {
    key: {},
  },
  type: "response.headers",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `args`                                                                   | *models.TransformsArgs*                                                  | :heavy_minus_sign:                                                       | N/A                                                                      |
| `env`                                                                    | *string*[]                                                               | :heavy_minus_sign:                                                       | N/A                                                                      |
| `op`                                                                     | [models.AddRouteTransformsOp](../models/addroutetransformsop.md)         | :heavy_check_mark:                                                       | N/A                                                                      |
| `target`                                                                 | [models.AddRouteTransformsTarget](../models/addroutetransformstarget.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `type`                                                                   | [models.AddRouteTransformsType](../models/addroutetransformstype.md)     | :heavy_check_mark:                                                       | N/A                                                                      |