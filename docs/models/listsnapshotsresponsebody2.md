# ListSnapshotsResponseBody2

## Example Usage

```typescript
import { ListSnapshotsResponseBody2 } from "@vercel/sdk/models/listsnapshotsop.js";

let value: ListSnapshotsResponseBody2 = {
  snapshots: [
    {
      id: "snap_123a6c5209bc3778245d011443644c8d27dc2c50",
      sourceSandboxId: "sbx_123a6c5209bc3778245d011443644c8d27dc2c50",
      region: "iad1",
      status: "created",
      sizeBytes: 104857600,
      expiresAt: 1750344501629,
      createdAt: 1750344501629,
      updatedAt: 1750344501629,
    },
  ],
  pagination: {
    total: 153.47,
    count: 20,
    next: 1540095775951,
    prev: 1540095775951,
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `snapshots`                                                                                    | [models.Snapshot](../models/snapshot.md)[]                                                     | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `pagination`                                                                                   | [models.ListSnapshotsResponseBodyPagination](../models/listsnapshotsresponsebodypagination.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |