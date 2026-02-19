# GetFlagSettingsResponseBody

Syncs direct the synchronization of Flags to Edge Configs

## Example Usage

```typescript
import { GetFlagSettingsResponseBody } from "@vercel/sdk/models/getflagsettingsop.js";

let value: GetFlagSettingsResponseBody = {
  typeName: "settings",
  projectId: "<id>",
  enabled: false,
  environments: [
    "<value 1>",
  ],
  entities: [
    {
      kind: "<value>",
      label: "<value>",
      attributes: [],
    },
  ],
  metadata: {
    activeFlagCount: 4993.67,
    archivedFlagCount: 7452.85,
    segmentCount: 6968.83,
    packSizeInBytes: 1215.53,
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `typeName`                                                               | [models.GetFlagSettingsTypeName](../models/getflagsettingstypename.md)   | :heavy_check_mark:                                                       | N/A                                                                      |
| `projectId`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `ownerId`                                                                | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `enabled`                                                                | *boolean*                                                                | :heavy_check_mark:                                                       | N/A                                                                      |
| `environments`                                                           | *string*[]                                                               | :heavy_check_mark:                                                       | N/A                                                                      |
| `connections`                                                            | [models.Connections](../models/connections.md)[]                         | :heavy_minus_sign:                                                       | N/A                                                                      |
| `entities`                                                               | [models.GetFlagSettingsEntities](../models/getflagsettingsentities.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |
| `createdAt`                                                              | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `updatedAt`                                                              | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `metadata`                                                               | [models.GetFlagSettingsMetadata](../models/getflagsettingsmetadata.md)   | :heavy_check_mark:                                                       | N/A                                                                      |