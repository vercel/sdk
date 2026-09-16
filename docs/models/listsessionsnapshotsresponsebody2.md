# ListSessionSnapshotsResponseBody2

## Example Usage

```typescript
import { ListSessionSnapshotsResponseBody2 } from "@vercel/sdk/models/listsessionsnapshotsop.js";

let value: ListSessionSnapshotsResponseBody2 = {
  pagination: {
    count: 6280.02,
    next: null,
  },
  snapshots: [
    {
      createdAt: 1750344501629,
      creationMethod: "manual",
      expiresAt: 1750344501629,
      id: "snap_123a6c5209bc3778245d011443644c8d27dc2c50",
      lastUsedAt: 1750344501629,
      parentId: "snap_parent123",
      region: "iad1",
      regions: [
        "iad1",
        "sfo1",
      ],
      sizeBytes: 104857600,
      sourceSessionId: "sbx_123a6c5209bc3778245d011443644c8d27dc2c50",
      status: "created",
      updatedAt: 1750344501629,
    },
  ],
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `pagination`                                                                                                 | [models.ListSessionSnapshotsResponseBodyPagination](../models/listsessionsnapshotsresponsebodypagination.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `snapshots`                                                                                                  | [models.Snapshot](../models/snapshot.md)[]                                                                   | :heavy_check_mark:                                                                                           | N/A                                                                                                          |