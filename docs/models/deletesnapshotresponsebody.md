# DeleteSnapshotResponseBody

## Example Usage

```typescript
import { DeleteSnapshotResponseBody } from "@vercel/sdk/models/deletesnapshotop.js";

let value: DeleteSnapshotResponseBody = {
  snapshot: {
    id: "snap_123a6c5209bc3778245d011443644c8d27dc2c50",
    sourceSandboxId: "sbx_123a6c5209bc3778245d011443644c8d27dc2c50",
    region: "iad1",
    status: "created",
    sizeBytes: 104857600,
    expiresAt: 1750344501629,
    createdAt: 1750344501629,
    updatedAt: 1750344501629,
  },
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `snapshot`                                                                  | [models.Snapshot](../models/snapshot.md)                                    | :heavy_check_mark:                                                          | This object contains information related to a Snapshot of a Vercel Sandbox. |