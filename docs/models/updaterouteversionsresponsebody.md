# UpdateRouteVersionsResponseBody

## Example Usage

```typescript
import { UpdateRouteVersionsResponseBody } from "@vercel/sdk/models/updaterouteversionsop.js";

let value: UpdateRouteVersionsResponseBody = {
  version: {
    createdBy: "<value>",
    id: "<id>",
    lastModified: 4796.91,
    s3Key: "<value>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `version`                                                                    | [models.UpdateRouteVersionsVersion](../models/updaterouteversionsversion.md) | :heavy_check_mark:                                                           | A version of routing rules stored in S3.                                     |