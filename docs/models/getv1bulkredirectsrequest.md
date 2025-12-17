# GetV1BulkRedirectsRequest

## Example Usage

```typescript
import { GetV1BulkRedirectsRequest } from "@vercel/sdk/models/getv1bulkredirectsop.js";

let value: GetV1BulkRedirectsRequest = {
  projectId: "<id>",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `projectId`                                | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `versionId`                                | *string*                                   | :heavy_minus_sign:                         | N/A                                        |
| `q`                                        | *string*                                   | :heavy_minus_sign:                         | N/A                                        |
| `diff`                                     | *models.Diff*                              | :heavy_minus_sign:                         | N/A                                        |
| `page`                                     | *number*                                   | :heavy_minus_sign:                         | N/A                                        |
| `perPage`                                  | *number*                                   | :heavy_minus_sign:                         | N/A                                        |
| `sortBy`                                   | [models.SortBy](../models/sortby.md)       | :heavy_minus_sign:                         | N/A                                        |
| `sortOrder`                                | [models.SortOrder](../models/sortorder.md) | :heavy_minus_sign:                         | N/A                                        |