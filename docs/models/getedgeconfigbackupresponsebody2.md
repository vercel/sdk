# GetEdgeConfigBackupResponseBody2

## Example Usage

```typescript
import { GetEdgeConfigBackupResponseBody2 } from "@vercel/sdk/models/getedgeconfigbackupop.js";

let value: GetEdgeConfigBackupResponseBody2 = {
  backup: {
    digest: "<value>",
    items: {},
    slug: "<value>",
    updatedAt: 6945.07,
  },
  id: "<id>",
  lastModified: 6632.62,
  metadata: {},
  user: {
    email: "Augustine.Wiza10@gmail.com",
    id: "<id>",
    username: "Fidel30",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `backup`                                                         | [models.ResponseBodyBackup](../models/responsebodybackup.md)     | :heavy_check_mark:                                               | N/A                                                              |
| `id`                                                             | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `lastModified`                                                   | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `metadata`                                                       | [models.ResponseBodyMetadata](../models/responsebodymetadata.md) | :heavy_check_mark:                                               | N/A                                                              |
| `user`                                                           | [models.ResponseBodyUser](../models/responsebodyuser.md)         | :heavy_check_mark:                                               | N/A                                                              |