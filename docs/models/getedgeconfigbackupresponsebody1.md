# GetEdgeConfigBackupResponseBody1

The object the API responds with when requesting an Edge Config backup

## Example Usage

```typescript
import { GetEdgeConfigBackupResponseBody1 } from "@vercel/sdk/models/getedgeconfigbackupop.js";

let value: GetEdgeConfigBackupResponseBody1 = {
  id: "<id>",
  lastModified: 3370.31,
  backup: {
    digest: "<value>",
    items: {
      "key": {
        updatedAt: 7062.46,
        value: "<value>",
        createdAt: 3018.16,
      },
    },
    slug: "<value>",
    updatedAt: 3040.2,
  },
  metadata: {},
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `lastModified`                                                                                 | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `backup`                                                                                       | [models.Backup](../models/backup.md)                                                           | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `metadata`                                                                                     | [models.Metadata](../models/metadata.md)                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `user`                                                                                         | [models.GetEdgeConfigBackupResponseBodyUser](../models/getedgeconfigbackupresponsebodyuser.md) | :heavy_minus_sign:                                                                             | N/A                                                                                            |