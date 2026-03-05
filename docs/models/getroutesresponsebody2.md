# GetRoutesResponseBody2

## Example Usage

```typescript
import { GetRoutesResponseBody2 } from "@vercel/sdk/models/getroutesop.js";

let value: GetRoutesResponseBody2 = {
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
    lastModified: 4323.06,
    createdBy: "<value>",
  },
  diffCount: 3571.92,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `routes`                                                                         | [models.GetRoutesResponseBodyRoutes](../models/getroutesresponsebodyroutes.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |
| `version`                                                                        | [models.GetRoutesResponseBodyVersion](../models/getroutesresponsebodyversion.md) | :heavy_check_mark:                                                               | A version of routing rules stored in S3.                                         |
| `diffCount`                                                                      | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |