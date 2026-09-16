# GetRoutesResponseBody4

## Example Usage

```typescript
import { GetRoutesResponseBody4 } from "@vercel/sdk/models/getroutesop.js";

let value: GetRoutesResponseBody4 = {
  limit: {
    currentRoutes: 9222.27,
    maxRoutes: 5613.61,
  },
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
    createdBy: "<value>",
    id: "<id>",
    lastModified: 4493.36,
    s3Key: "<value>",
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `limit`                                                                                                                    | [models.ResponseBodyLimit](../models/responsebodylimit.md)                                                                 | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `routes`                                                                                                                   | [models.GetRoutesResponseBodyProjectRoutesResponseRoutes](../models/getroutesresponsebodyprojectroutesresponseroutes.md)[] | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `version`                                                                                                                  | [models.GetRoutesResponseBodyProjectRoutesResponseVersion](../models/getroutesresponsebodyprojectroutesresponseversion.md) | :heavy_check_mark:                                                                                                         | A version of routing rules stored in S3.                                                                                   |