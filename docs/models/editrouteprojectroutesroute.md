# EditRouteProjectRoutesRoute

## Example Usage

```typescript
import { EditRouteProjectRoutesRoute } from "@vercel/sdk/models/editrouteop.js";

let value: EditRouteProjectRoutesRoute = {
  src: "<value>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `src`                                                            | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `dest`                                                           | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `headers`                                                        | [models.EditRouteHeaders](../models/editrouteheaders.md)         | :heavy_minus_sign:                                               | N/A                                                              |
| `caseSensitive`                                                  | *boolean*                                                        | :heavy_minus_sign:                                               | N/A                                                              |
| `status`                                                         | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `has`                                                            | [models.EditRouteHas](../models/editroutehas.md)[]               | :heavy_minus_sign:                                               | N/A                                                              |
| `missing`                                                        | [models.EditRouteMissing](../models/editroutemissing.md)[]       | :heavy_minus_sign:                                               | N/A                                                              |
| `transforms`                                                     | [models.EditRouteTransforms](../models/editroutetransforms.md)[] | :heavy_minus_sign:                                               | N/A                                                              |
| `respectOriginCacheControl`                                      | *boolean*                                                        | :heavy_minus_sign:                                               | N/A                                                              |