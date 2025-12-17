# PatchV1BulkRedirectsResponseBody

## Example Usage

```typescript
import { PatchV1BulkRedirectsResponseBody } from "@vercel/sdk/models/patchv1bulkredirectsop.js";

let value: PatchV1BulkRedirectsResponseBody = {
  alias: "<value>",
  version: {
    id: "<id>",
    key: "<key>",
    lastModified: 9685.6,
    createdBy: "<value>",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `alias`                                                                        | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `version`                                                                      | [models.PatchV1BulkRedirectsVersion](../models/patchv1bulkredirectsversion.md) | :heavy_check_mark:                                                             | N/A                                                                            |