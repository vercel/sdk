# UpdateFlagSettingsResponseBody

## Example Usage

```typescript
import { UpdateFlagSettingsResponseBody } from "@vercel/sdk/models/updateflagsettingsop.js";

let value: UpdateFlagSettingsResponseBody = {
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

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `createdAt`                                                                                            | *number*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `enabled`                                                                                              | *boolean*                                                                                              | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `entities`                                                                                             | [models.UpdateFlagSettingsFeatureFlagsEntities](../models/updateflagsettingsfeatureflagsentities.md)[] | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `environments`                                                                                         | *string*[]                                                                                             | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `metadata`                                                                                             | [models.UpdateFlagSettingsMetadata](../models/updateflagsettingsmetadata.md)                           | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `ownerId`                                                                                              | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `projectId`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `typeName`                                                                                             | [models.UpdateFlagSettingsTypeName](../models/updateflagsettingstypename.md)                           | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `updatedAt`                                                                                            | *number*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |