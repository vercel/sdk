# ListSessionSnapshotsResponseBody


## Supported Types

### `models.ListSessionSnapshotsResponseBody1`

```typescript
const value: models.ListSessionSnapshotsResponseBody1 = {};
```

### `models.ListSessionSnapshotsResponseBody2`

```typescript
const value: models.ListSessionSnapshotsResponseBody2 = {
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

