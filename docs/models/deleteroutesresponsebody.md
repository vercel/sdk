# DeleteRoutesResponseBody

## Example Usage

```typescript
import { DeleteRoutesResponseBody } from "@vercel/sdk/models/deleteroutesop.js";

let value: DeleteRoutesResponseBody = {
  deletedCount: 1232.35,
  version: {
    id: "<id>",
    s3Key: "<value>",
    lastModified: 2798.46,
    createdBy: "<value>",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `deletedCount`                                                 | *number*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `version`                                                      | [models.DeleteRoutesVersion](../models/deleteroutesversion.md) | :heavy_check_mark:                                             | A version of routing rules stored in S3.                       |