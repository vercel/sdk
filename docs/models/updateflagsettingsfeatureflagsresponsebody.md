# UpdateFlagSettingsFeatureFlagsResponseBody

Syncs direct the synchronization of Flags to Edge Configs

## Example Usage

```typescript
import { UpdateFlagSettingsFeatureFlagsResponseBody } from "@vercel/sdk/models/updateflagsettingsop.js";

let value: UpdateFlagSettingsFeatureFlagsResponseBody = {
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

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `typeName`                                                                                                             | [models.UpdateFlagSettingsFeatureFlagsTypeName](../models/updateflagsettingsfeatureflagstypename.md)                   | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `projectId`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `ownerId`                                                                                                              | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `enabled`                                                                                                              | *boolean*                                                                                                              | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `environments`                                                                                                         | *string*[]                                                                                                             | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `connections`                                                                                                          | [models.UpdateFlagSettingsFeatureFlagsConnections](../models/updateflagsettingsfeatureflagsconnections.md)[]           | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `entities`                                                                                                             | [models.UpdateFlagSettingsFeatureFlagsResponseEntities](../models/updateflagsettingsfeatureflagsresponseentities.md)[] | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `createdAt`                                                                                                            | *number*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `updatedAt`                                                                                                            | *number*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `metadata`                                                                                                             | [models.UpdateFlagSettingsFeatureFlagsMetadata](../models/updateflagsettingsfeatureflagsmetadata.md)                   | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |