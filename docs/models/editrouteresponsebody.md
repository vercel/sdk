# EditRouteResponseBody

## Example Usage

```typescript
import { EditRouteResponseBody } from "@vercel/sdk/models/editrouteop.js";

let value: EditRouteResponseBody = {
  version: {
    createdBy: "<value>",
    id: "<id>",
    lastModified: 506.42,
    s3Key: "<value>",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `route`                                                                                        | [models.EditRouteProjectRoutesResponseRoute](../models/editrouteprojectroutesresponseroute.md) | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `version`                                                                                      | [models.EditRouteVersion](../models/editrouteversion.md)                                       | :heavy_check_mark:                                                                             | A version of routing rules stored in S3.                                                       |