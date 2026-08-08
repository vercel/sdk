# GetRoutesResponseBody4

## Example Usage

```typescript
import { GetRoutesResponseBody4 } from "@vercel/sdk/models/getroutesop.js";

let value: GetRoutesResponseBody4 = {
  routes: [
    {
      id: "<id>",
      name: "<value>",
      route: {
        src: "<value>",
      },
    },
  ],
  version: {
    id: "<id>",
    s3Key: "<value>",
    lastModified: 5613.61,
    createdBy: "<value>",
  },
  limit: {
    maxRoutes: 6227.91,
    currentRoutes: 4493.36,
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `routes`                                                                                                                   | [models.GetRoutesResponseBodyProjectRoutesResponseRoutes](../models/getroutesresponsebodyprojectroutesresponseroutes.md)[] | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `version`                                                                                                                  | [models.GetRoutesResponseBodyProjectRoutesResponseVersion](../models/getroutesresponsebodyprojectroutesresponseversion.md) | :heavy_check_mark:                                                                                                         | A version of routing rules stored in S3.                                                                                   |
| `limit`                                                                                                                    | [models.ResponseBodyLimit](../models/responsebodylimit.md)                                                                 | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |