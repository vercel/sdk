# UpdateFlagSettingsResponse


## Supported Types

### `models.UpdateFlagSettingsResponseBody`

```typescript
const value: models.UpdateFlagSettingsResponseBody = {
  typeName: "settings",
  projectId: "<id>",
  enabled: true,
  environments: [
    "<value 1>",
  ],
  entities: [],
  metadata: {
    activeFlagCount: 6242.05,
    archivedFlagCount: 3625.82,
    segmentCount: 4153.45,
    packSizeInBytes: 3220.65,
  },
};
```

### `models.UpdateFlagSettingsFeatureFlagsResponseBody`

```typescript
const value: models.UpdateFlagSettingsFeatureFlagsResponseBody = {
  typeName: "settings",
  projectId: "<id>",
  enabled: true,
  environments: [
    "<value 1>",
    "<value 2>",
  ],
  entities: [
    {
      kind: "<value>",
      label: "<value>",
      attributes: [],
    },
  ],
  metadata: {
    activeFlagCount: 5566.48,
    archivedFlagCount: 6225.09,
    segmentCount: 8955.66,
    packSizeInBytes: 5551.69,
  },
};
```

