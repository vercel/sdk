# AddRouteProjectRoutesTransforms

## Example Usage

```typescript
import { AddRouteProjectRoutesTransforms } from "@vercel/sdk/models/addrouteop.js";

let value: AddRouteProjectRoutesTransforms = {
  type: "request.headers",
  op: "delete",
  target: {
    key: "<key>",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `type`                                                                                     | [models.AddRouteProjectRoutesResponseType](../models/addrouteprojectroutesresponsetype.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `op`                                                                                       | [models.AddRouteProjectRoutesOp](../models/addrouteprojectroutesop.md)                     | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `target`                                                                                   | [models.AddRouteProjectRoutesTarget](../models/addrouteprojectroutestarget.md)             | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `args`                                                                                     | *models.AddRouteArgs*                                                                      | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `env`                                                                                      | *string*[]                                                                                 | :heavy_minus_sign:                                                                         | N/A                                                                                        |