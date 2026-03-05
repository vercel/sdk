# EditRouteProjectRoutesTransforms

## Example Usage

```typescript
import { EditRouteProjectRoutesTransforms } from "@vercel/sdk/models/editrouteop.js";

let value: EditRouteProjectRoutesTransforms = {
  type: "request.headers",
  op: "delete",
  target: {
    key: {},
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `type`                                                                                       | [models.EditRouteProjectRoutesResponseType](../models/editrouteprojectroutesresponsetype.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `op`                                                                                         | [models.EditRouteProjectRoutesOp](../models/editrouteprojectroutesop.md)                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `target`                                                                                     | [models.EditRouteProjectRoutesTarget](../models/editrouteprojectroutestarget.md)             | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `args`                                                                                       | *models.EditRouteArgs*                                                                       | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `env`                                                                                        | *string*[]                                                                                   | :heavy_minus_sign:                                                                           | N/A                                                                                          |