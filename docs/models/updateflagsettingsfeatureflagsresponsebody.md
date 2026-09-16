# UpdateFlagSettingsFeatureFlagsResponseBody

## Example Usage

```typescript
import { UpdateFlagSettingsFeatureFlagsResponseBody } from "@vercel/sdk/models/updateflagsettingsop.js";

let value: UpdateFlagSettingsFeatureFlagsResponseBody = {
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

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                            | *number*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `enabled`                                                                                                              | *boolean*                                                                                                              | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `entities`                                                                                                             | [models.UpdateFlagSettingsFeatureFlagsResponseEntities](../models/updateflagsettingsfeatureflagsresponseentities.md)[] | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `environments`                                                                                                         | *string*[]                                                                                                             | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `metadata`                                                                                                             | [models.UpdateFlagSettingsFeatureFlagsMetadata](../models/updateflagsettingsfeatureflagsmetadata.md)                   | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `ownerId`                                                                                                              | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `projectId`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `typeName`                                                                                                             | [models.UpdateFlagSettingsFeatureFlagsTypeName](../models/updateflagsettingsfeatureflagstypename.md)                   | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `updatedAt`                                                                                                            | *number*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |