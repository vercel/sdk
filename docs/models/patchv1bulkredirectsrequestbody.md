# PatchV1BulkRedirectsRequestBody

## Example Usage

```typescript
import { PatchV1BulkRedirectsRequestBody } from "@vercel/sdk/models/patchv1bulkredirectsop.js";

let value: PatchV1BulkRedirectsRequestBody = {
  redirect: {
    source: "<value>",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `name`                                                                                 | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `redirect`                                                                             | [models.Redirect](../models/redirect.md)                                               | :heavy_check_mark:                                                                     | The redirect object to edit. The source field is used to match the redirect to modify. |
| `restore`                                                                              | *boolean*                                                                              | :heavy_minus_sign:                                                                     | If true, restores the redirect from the latest production version to staging.          |