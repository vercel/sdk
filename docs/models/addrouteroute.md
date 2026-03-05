# AddRouteRoute

## Example Usage

```typescript
import { AddRouteRoute } from "@vercel/sdk/models/addrouteop.js";

let value: AddRouteRoute = {
  name: "<value>",
  route: {
    src: "<value>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `description`                                                                | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `enabled`                                                                    | *boolean*                                                                    | :heavy_minus_sign:                                                           | N/A                                                                          |
| `srcSyntax`                                                                  | [models.SrcSyntax](../models/srcsyntax.md)                                   | :heavy_minus_sign:                                                           | Pattern syntax type. If not provided, inferred from pattern.                 |
| `route`                                                                      | [models.AddRouteProjectRoutesRoute](../models/addrouteprojectroutesroute.md) | :heavy_check_mark:                                                           | N/A                                                                          |