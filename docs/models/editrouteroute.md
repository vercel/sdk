# EditRouteRoute

The full route object to replace the existing route with

## Example Usage

```typescript
import { EditRouteRoute } from "@vercel/sdk/models/editrouteop.js";

let value: EditRouteRoute = {
  name: "<value>",
  route: {
    src: "<value>",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `name`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `description`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `enabled`                                                                      | *boolean*                                                                      | :heavy_minus_sign:                                                             | N/A                                                                            |
| `srcSyntax`                                                                    | [models.EditRouteSrcSyntax](../models/editroutesrcsyntax.md)                   | :heavy_minus_sign:                                                             | Pattern syntax type. If not provided, inferred from pattern.                   |
| `route`                                                                        | [models.EditRouteProjectRoutesRoute](../models/editrouteprojectroutesroute.md) | :heavy_check_mark:                                                             | N/A                                                                            |