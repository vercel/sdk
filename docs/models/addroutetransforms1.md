# AddRouteTransforms1

## Example Usage

```typescript
import { AddRouteTransforms1 } from "@vercel/sdk/models/addrouteop.js";

let value: AddRouteTransforms1 = {
  type: "request.query",
  op: "set",
  target: {
    key: {},
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `type`                                                                   | [models.AddRouteTransformsType](../models/addroutetransformstype.md)     | :heavy_check_mark:                                                       | N/A                                                                      |
| `op`                                                                     | [models.AddRouteTransformsOp](../models/addroutetransformsop.md)         | :heavy_check_mark:                                                       | N/A                                                                      |
| `target`                                                                 | [models.AddRouteTransformsTarget](../models/addroutetransformstarget.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `args`                                                                   | *models.AddRouteTransformsArgs*                                          | :heavy_minus_sign:                                                       | N/A                                                                      |
| `env`                                                                    | *string*[]                                                               | :heavy_minus_sign:                                                       | N/A                                                                      |