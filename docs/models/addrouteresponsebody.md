# AddRouteResponseBody

## Example Usage

```typescript
import { AddRouteResponseBody } from "@vercel/sdk/models/addrouteop.js";

let value: AddRouteResponseBody = {
  route: {
    id: "<id>",
    name: "<value>",
    route: {
      src: "<value>",
    },
  },
  version: {
    id: "<id>",
    s3Key: "<value>",
    lastModified: 8966.34,
    createdBy: "<value>",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `route`                                                                                      | [models.AddRouteProjectRoutesResponseRoute](../models/addrouteprojectroutesresponseroute.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `version`                                                                                    | [models.AddRouteVersion](../models/addrouteversion.md)                                       | :heavy_check_mark:                                                                           | A version of routing rules stored in S3.                                                     |