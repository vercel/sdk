# ListSessionSnapshotsResponseBody2

## Example Usage

```typescript
import { ListSessionSnapshotsResponseBody2 } from "@vercel/sdk/models/listsessionsnapshotsop.js";

let value: ListSessionSnapshotsResponseBody2 = {
  snapshots: [
    {
      id: "snap_123a6c5209bc3778245d011443644c8d27dc2c50",
      sourceSessionId: "sbx_123a6c5209bc3778245d011443644c8d27dc2c50",
      region: "iad1",
      status: "created",
      sizeBytes: 104857600,
      expiresAt: 1750344501629,
      createdAt: 1750344501629,
      updatedAt: 1750344501629,
    },
  ],
  pagination: {
    count: 134.74,
    next: "<value>",
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `snapshots`                                                                                                  | [models.Snapshot](../models/snapshot.md)[]                                                                   | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `pagination`                                                                                                 | [models.ListSessionSnapshotsResponseBodyPagination](../models/listsessionsnapshotsresponsebodypagination.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |