# UpdateRouteVersionsResponseBody

## Example Usage

```typescript
import { UpdateRouteVersionsResponseBody } from "@vercel/sdk/models/updaterouteversionsop.js";

let value: UpdateRouteVersionsResponseBody = {
  version: {
    id: "<id>",
    s3Key: "<value>",
    lastModified: 4796.91,
    createdBy: "<value>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `version`                                                                    | [models.UpdateRouteVersionsVersion](../models/updaterouteversionsversion.md) | :heavy_check_mark:                                                           | A version of routing rules stored in S3.                                     |