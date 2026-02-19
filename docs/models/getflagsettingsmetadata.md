# GetFlagSettingsMetadata

## Example Usage

```typescript
import { GetFlagSettingsMetadata } from "@vercel/sdk/models/getflagsettingsop.js";

let value: GetFlagSettingsMetadata = {
  activeFlagCount: 219.38,
  archivedFlagCount: 8572.7,
  segmentCount: 5024.67,
  packSizeInBytes: 6187.78,
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