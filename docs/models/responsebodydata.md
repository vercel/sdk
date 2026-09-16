# ResponseBodyData

## Example Usage

```typescript
import { ResponseBodyData } from "@vercel/sdk/models/listteamflagsettingsop.js";

let value: ResponseBodyData = {
  enabled: true,
  entities: [
    {
      attributes: [],
      kind: "<value>",
      label: "<value>",
    },
  ],
  environments: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  metadata: {
    activeFlagCount: 563.7,
    archivedFlagCount: 7908.77,
    packSizeInBytes: 3211.71,
    segmentCount: 4966.52,
  },
  projectId: "<id>",
  typeName: "settings",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                              | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `enabled`                                                                                                | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `entities`                                                                                               | [models.ResponseBodyEntities](../models/responsebodyentities.md)[]                                       | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `environments`                                                                                           | *string*[]                                                                                               | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `metadata`                                                                                               | [models.ListTeamFlagSettingsResponseBodyMetadata](../models/listteamflagsettingsresponsebodymetadata.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `ownerId`                                                                                                | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `projectId`                                                                                              | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `typeName`                                                                                               | [models.ListTeamFlagSettingsResponseBodyTypeName](../models/listteamflagsettingsresponsebodytypename.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `updatedAt`                                                                                              | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |