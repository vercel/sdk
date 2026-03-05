# ResponseBody4

## Example Usage

```typescript
import { ResponseBody4 } from "@vercel/sdk/models/getroutesop.js";

let value: ResponseBody4 = {
  routes: [],
  version: {
    id: "<id>",
    s3Key: "<value>",
    lastModified: 8925.49,
    createdBy: "<value>",
  },
  limit: {
    maxRoutes: 9173.09,
    currentRoutes: 3848.91,
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `routes`                                                                                                                   | [models.GetRoutesResponseBodyProjectRoutesResponseRoutes](../models/getroutesresponsebodyprojectroutesresponseroutes.md)[] | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `version`                                                                                                                  | [models.GetRoutesResponseBodyProjectRoutesResponseVersion](../models/getroutesresponsebodyprojectroutesresponseversion.md) | :heavy_check_mark:                                                                                                         | A version of routing rules stored in S3.                                                                                   |
| `limit`                                                                                                                    | [models.ResponseBodyLimit](../models/responsebodylimit.md)                                                                 | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |