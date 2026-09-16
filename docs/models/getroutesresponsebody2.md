# GetRoutesResponseBody2

## Example Usage

```typescript
import { GetRoutesResponseBody2 } from "@vercel/sdk/models/getroutesop.js";

let value: GetRoutesResponseBody2 = {
  diffCount: 7838.68,
  routes: [],
  version: {
    createdBy: "<value>",
    id: "<id>",
    lastModified: 3571.92,
    s3Key: "<value>",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `diffCount`                                                                      | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `routes`                                                                         | [models.GetRoutesResponseBodyRoutes](../models/getroutesresponsebodyroutes.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |
| `version`                                                                        | [models.GetRoutesResponseBodyVersion](../models/getroutesresponsebodyversion.md) | :heavy_check_mark:                                                               | A version of routing rules stored in S3.                                         |