# AddRouteProjectRoutesRoute

## Example Usage

```typescript
import { AddRouteProjectRoutesRoute } from "@vercel/sdk/models/addrouteop.js";

let value: AddRouteProjectRoutesRoute = {
  src: "<value>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `src`                                                          | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `dest`                                                         | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `headers`                                                      | [models.AddRouteHeaders](../models/addrouteheaders.md)         | :heavy_minus_sign:                                             | N/A                                                            |
| `caseSensitive`                                                | *boolean*                                                      | :heavy_minus_sign:                                             | N/A                                                            |
| `status`                                                       | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `has`                                                          | [models.AddRouteHas](../models/addroutehas.md)[]               | :heavy_minus_sign:                                             | N/A                                                            |
| `missing`                                                      | [models.AddRouteMissing](../models/addroutemissing.md)[]       | :heavy_minus_sign:                                             | N/A                                                            |
| `transforms`                                                   | [models.AddRouteTransforms](../models/addroutetransforms.md)[] | :heavy_minus_sign:                                             | N/A                                                            |
| `respectOriginCacheControl`                                    | *boolean*                                                      | :heavy_minus_sign:                                             | N/A                                                            |