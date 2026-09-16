# GetFlagSettingsResponseBody

## Example Usage

```typescript
import { GetFlagSettingsResponseBody } from "@vercel/sdk/models/getflagsettingsop.js";

let value: GetFlagSettingsResponseBody = {
  enabled: false,
  entities: [],
  environments: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  metadata: {
    activeFlagCount: 3841.94,
    archivedFlagCount: 4993.67,
    packSizeInBytes: 7452.85,
    segmentCount: 6968.83,
  },
  projectId: "<id>",
  typeName: "settings",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `createdAt`                                                              | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `enabled`                                                                | *boolean*                                                                | :heavy_check_mark:                                                       | N/A                                                                      |
| `entities`                                                               | [models.GetFlagSettingsEntities](../models/getflagsettingsentities.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |
| `environments`                                                           | *string*[]                                                               | :heavy_check_mark:                                                       | N/A                                                                      |
| `metadata`                                                               | [models.GetFlagSettingsMetadata](../models/getflagsettingsmetadata.md)   | :heavy_check_mark:                                                       | N/A                                                                      |
| `ownerId`                                                                | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `projectId`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `typeName`                                                               | [models.GetFlagSettingsTypeName](../models/getflagsettingstypename.md)   | :heavy_check_mark:                                                       | N/A                                                                      |
| `updatedAt`                                                              | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |