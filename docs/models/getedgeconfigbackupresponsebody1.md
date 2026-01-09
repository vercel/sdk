# GetEdgeConfigBackupResponseBody1

The object the API responds with when requesting an Edge Config backup

## Example Usage

```typescript
import { GetEdgeConfigBackupResponseBody1 } from "@vercel/sdk/models/getedgeconfigbackupop.js";

let value: GetEdgeConfigBackupResponseBody1 = {
  id: "<id>",
  lastModified: 3370.31,
  backup: {
    items: {
      "key": {
        createdAt: 1254.45,
        updatedAt: 3018.16,
        value: true,
      },
    },
    slug: "<value>",
    updatedAt: 9984.91,
    digest: "<value>",
  },
  metadata: {},
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                   | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `lastModified`                                                                                         | *number*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `backup`                                                                                               | [models.Backup](../models/backup.md)                                                                   | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `metadata`                                                                                             | [models.GetEdgeConfigBackupResponseBodyMetadata](../models/getedgeconfigbackupresponsebodymetadata.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `user`                                                                                                 | [models.GetEdgeConfigBackupResponseBodyUser](../models/getedgeconfigbackupresponsebodyuser.md)         | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |