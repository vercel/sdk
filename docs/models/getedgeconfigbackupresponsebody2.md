# GetEdgeConfigBackupResponseBody2

## Example Usage

```typescript
import { GetEdgeConfigBackupResponseBody2 } from "@vercel/sdk/models/getedgeconfigbackupop.js";

let value: GetEdgeConfigBackupResponseBody2 = {
  user: {
    id: "<id>",
    username: "Carrie.Ondricka9",
    email: "Anabel66@hotmail.com",
  },
  id: "<id>",
  lastModified: 9287.58,
  backup: {
    digest: "<value>",
    items: {
      "key": {
        updatedAt: 3016.46,
        value: [],
        createdAt: 7230.66,
      },
    },
    slug: "<value>",
    updatedAt: 4755.84,
  },
  metadata: {},
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `user`                                                           | [models.ResponseBodyUser](../models/responsebodyuser.md)         | :heavy_check_mark:                                               | N/A                                                              |
| `id`                                                             | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `lastModified`                                                   | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `backup`                                                         | [models.ResponseBodyBackup](../models/responsebodybackup.md)     | :heavy_check_mark:                                               | N/A                                                              |
| `metadata`                                                       | [models.ResponseBodyMetadata](../models/responsebodymetadata.md) | :heavy_check_mark:                                               | N/A                                                              |