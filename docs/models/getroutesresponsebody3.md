# GetRoutesResponseBody3

## Example Usage

```typescript
import { GetRoutesResponseBody3 } from "@vercel/sdk/models/getroutesop.js";

let value: GetRoutesResponseBody3 = {
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
    lastModified: 6411.04,
    createdBy: "<value>",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `routes`                                                                                                   | [models.GetRoutesResponseBodyProjectRoutesRoutes](../models/getroutesresponsebodyprojectroutesroutes.md)[] | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `version`                                                                                                  | [models.GetRoutesResponseBodyProjectRoutesVersion](../models/getroutesresponsebodyprojectroutesversion.md) | :heavy_check_mark:                                                                                         | A version of routing rules stored in S3.                                                                   |