# DeleteV1BulkRedirectsResponseBody

## Example Usage

```typescript
import { DeleteV1BulkRedirectsResponseBody } from "@vercel/sdk/models/deletev1bulkredirectsop.js";

let value: DeleteV1BulkRedirectsResponseBody = {
  alias: "<value>",
  version: {
    id: "<id>",
    key: "<key>",
    lastModified: 2355.81,
    createdBy: "<value>",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `alias`                                                                          | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `version`                                                                        | [models.DeleteV1BulkRedirectsVersion](../models/deletev1bulkredirectsversion.md) | :heavy_check_mark:                                                               | N/A                                                                              |