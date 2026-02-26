# ListSnapshotsResponseBody


## Supported Types

### `models.ListSnapshotsResponseBody1`

```typescript
const value: models.ListSnapshotsResponseBody1 = {};
```

### `models.ListSnapshotsResponseBody2`

```typescript
const value: models.ListSnapshotsResponseBody2 = {
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

