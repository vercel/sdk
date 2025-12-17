# PutV1BulkRedirectsResponseBody

## Example Usage

```typescript
import { PutV1BulkRedirectsResponseBody } from "@vercel/sdk/models/putv1bulkredirectsop.js";

let value: PutV1BulkRedirectsResponseBody = {
  alias: "<value>",
  version: {
    id: "<id>",
    key: "<key>",
    lastModified: 5631.19,
    createdBy: "<value>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `alias`                                                                    | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `version`                                                                  | [models.PutV1BulkRedirectsVersion](../models/putv1bulkredirectsversion.md) | :heavy_check_mark:                                                         | N/A                                                                        |