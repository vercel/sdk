# ListSessionSnapshotsResponseBody


## Supported Types

### `models.ListSessionSnapshotsResponseBody1`

```typescript
const value: models.ListSessionSnapshotsResponseBody1 = {};
```

### `models.ListSessionSnapshotsResponseBody2`

```typescript
const value: models.ListSessionSnapshotsResponseBody2 = {
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

