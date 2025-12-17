# PostV1BulkRedirectsRestoreRequestBody

## Example Usage

```typescript
import { PostV1BulkRedirectsRestoreRequestBody } from "@vercel/sdk/models/postv1bulkredirectsrestoreop.js";

let value: PostV1BulkRedirectsRestoreRequestBody = {
  redirects: [],
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `name`                                                                                         | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `redirects`                                                                                    | *string*[]                                                                                     | :heavy_check_mark:                                                                             | The redirects to restore. The source of the redirect is used to match the redirect to restore. |