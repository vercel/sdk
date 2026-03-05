# UpdateRouteVersionsVersion

A version of routing rules stored in S3.

## Example Usage

```typescript
import { UpdateRouteVersionsVersion } from "@vercel/sdk/models/updaterouteversionsop.js";

let value: UpdateRouteVersionsVersion = {
  id: "<id>",
  s3Key: "<value>",
  lastModified: 6250.45,
  createdBy: "<value>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | *string*                                                           | :heavy_check_mark:                                                 | Unique identifier for the version.                                 |
| `s3Key`                                                            | *string*                                                           | :heavy_check_mark:                                                 | The S3 key where the routing rules are stored.                     |
| `lastModified`                                                     | *number*                                                           | :heavy_check_mark:                                                 | Timestamp of when this version was last modified.                  |
| `createdBy`                                                        | *string*                                                           | :heavy_check_mark:                                                 | The user who created this version.                                 |
| `isStaging`                                                        | *boolean*                                                          | :heavy_minus_sign:                                                 | Whether this version is staged and not yet promoted to production. |
| `isLive`                                                           | *boolean*                                                          | :heavy_minus_sign:                                                 | Whether this version is currently live in production.              |
| `ruleCount`                                                        | *number*                                                           | :heavy_minus_sign:                                                 | The number of routing rules in this version.                       |
| `alias`                                                            | *string*                                                           | :heavy_minus_sign:                                                 | The staging alias for previewing this version.                     |