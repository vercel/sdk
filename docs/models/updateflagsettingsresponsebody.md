# UpdateFlagSettingsResponseBody

Syncs direct the synchronization of Flags to Edge Configs

## Example Usage

```typescript
import { UpdateFlagSettingsResponseBody } from "@vercel/sdk/models/updateflagsettingsop.js";

let value: UpdateFlagSettingsResponseBody = {
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

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `typeName`                                                                                             | [models.UpdateFlagSettingsTypeName](../models/updateflagsettingstypename.md)                           | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `projectId`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `ownerId`                                                                                              | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `enabled`                                                                                              | *boolean*                                                                                              | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `environments`                                                                                         | *string*[]                                                                                             | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `connections`                                                                                          | [models.UpdateFlagSettingsConnections](../models/updateflagsettingsconnections.md)[]                   | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `entities`                                                                                             | [models.UpdateFlagSettingsFeatureFlagsEntities](../models/updateflagsettingsfeatureflagsentities.md)[] | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `createdAt`                                                                                            | *number*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `updatedAt`                                                                                            | *number*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `metadata`                                                                                             | [models.UpdateFlagSettingsMetadata](../models/updateflagsettingsmetadata.md)                           | :heavy_check_mark:                                                                                     | N/A                                                                                                    |