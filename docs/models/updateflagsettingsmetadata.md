# UpdateFlagSettingsMetadata

## Example Usage

```typescript
import { UpdateFlagSettingsMetadata } from "@vercel/sdk/models/updateflagsettingsop.js";

let value: UpdateFlagSettingsMetadata = {
  activeFlagCount: 4254.42,
  archivedFlagCount: 6930.25,
  segmentCount: 2011.11,
  packSizeInBytes: 5327.42,
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `activeFlagCount`   | *number*            | :heavy_check_mark:  | N/A                 |
| `archivedFlagCount` | *number*            | :heavy_check_mark:  | N/A                 |
| `segmentCount`      | *number*            | :heavy_check_mark:  | N/A                 |
| `packSizeInBytes`   | *number*            | :heavy_check_mark:  | N/A                 |
| `packRevision`      | *number*            | :heavy_minus_sign:  | N/A                 |
| `configUpdatedAt`   | *number*            | :heavy_minus_sign:  | N/A                 |