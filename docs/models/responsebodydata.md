# ResponseBodyData

Syncs direct the synchronization of Flags to Edge Configs

## Example Usage

```typescript
import { ResponseBodyData } from "@vercel/sdk/models/listteamflagsettingsop.js";

let value: ResponseBodyData = {
  typeName: "settings",
  projectId: "<id>",
  enabled: true,
  environments: [
    "<value 1>",
    "<value 2>",
  ],
  entities: [],
  metadata: {
    activeFlagCount: 9796.85,
    archivedFlagCount: 563.7,
    segmentCount: 7908.77,
    packSizeInBytes: 3211.71,
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `typeName`                                                                                               | [models.ResponseBodyTypeName](../models/responsebodytypename.md)                                         | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `projectId`                                                                                              | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `ownerId`                                                                                                | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `enabled`                                                                                                | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `environments`                                                                                           | *string*[]                                                                                               | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `connections`                                                                                            | [models.ResponseBodyConnections](../models/responsebodyconnections.md)[]                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `entities`                                                                                               | [models.ResponseBodyEntities](../models/responsebodyentities.md)[]                                       | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `createdAt`                                                                                              | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `updatedAt`                                                                                              | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `metadata`                                                                                               | [models.ListTeamFlagSettingsResponseBodyMetadata](../models/listteamflagsettingsresponsebodymetadata.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |