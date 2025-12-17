# PostV1BulkRedirectsRestoreResponseBody

## Example Usage

```typescript
import { PostV1BulkRedirectsRestoreResponseBody } from "@vercel/sdk/models/postv1bulkredirectsrestoreop.js";

let value: PostV1BulkRedirectsRestoreResponseBody = {
  version: {
    id: "<id>",
    key: "<key>",
    lastModified: 9949,
    createdBy: "<value>",
  },
  restored: [
    "<value 1>",
    "<value 2>",
  ],
  failedToRestore: [],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `version`                                                                                  | [models.PostV1BulkRedirectsRestoreVersion](../models/postv1bulkredirectsrestoreversion.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `restored`                                                                                 | *string*[]                                                                                 | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `failedToRestore`                                                                          | *string*[]                                                                                 | :heavy_check_mark:                                                                         | N/A                                                                                        |