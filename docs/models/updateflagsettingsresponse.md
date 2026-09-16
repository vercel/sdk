# UpdateFlagSettingsResponse


## Supported Types

### `models.UpdateFlagSettingsResponseBody`

```typescript
const value: models.UpdateFlagSettingsResponseBody = {
  enabled: true,
  entities: [],
  environments: [
    "<value 1>",
  ],
  metadata: {
    activeFlagCount: 6242.05,
    archivedFlagCount: 3625.82,
    packSizeInBytes: 4153.45,
    segmentCount: 3220.65,
  },
  projectId: "<id>",
  typeName: "settings",
};
```

### `models.UpdateFlagSettingsFeatureFlagsResponseBody`

```typescript
const value: models.UpdateFlagSettingsFeatureFlagsResponseBody = {
  enabled: true,
  entities: [
    {
      attributes: [
        {
          key: "<key>",
          type: "<value>",
        },
      ],
      kind: "<value>",
      label: "<value>",
    },
  ],
  environments: [
    "<value 1>",
  ],
  metadata: {
    activeFlagCount: 5566.48,
    archivedFlagCount: 6225.09,
    packSizeInBytes: 8955.66,
    segmentCount: 5551.69,
  },
  projectId: "<id>",
  typeName: "settings",
};
```

