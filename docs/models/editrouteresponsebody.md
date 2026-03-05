# EditRouteResponseBody

## Example Usage

```typescript
import { EditRouteResponseBody } from "@vercel/sdk/models/editrouteop.js";

let value: EditRouteResponseBody = {
  version: {
    id: "<id>",
    s3Key: "<value>",
    lastModified: 506.42,
    createdBy: "<value>",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `route`                                                                                        | [models.EditRouteProjectRoutesResponseRoute](../models/editrouteprojectroutesresponseroute.md) | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `version`                                                                                      | [models.EditRouteVersion](../models/editrouteversion.md)                                       | :heavy_check_mark:                                                                             | A version of routing rules stored in S3.                                                       |