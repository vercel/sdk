# StrictPasswordProtectionSettings

When enabled, adding, changing, or removing project password protection requires Owner role.

## Example Usage

```typescript
import { StrictPasswordProtectionSettings } from "@vercel/sdk/models/team.js";

let value: StrictPasswordProtectionSettings = {
  enabled: true,
  updatedAt: 4647.12,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `enabled`          | *boolean*          | :heavy_check_mark: | N/A                |
| `updatedAt`        | *number*           | :heavy_check_mark: | N/A                |