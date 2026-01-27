# StrictDeploymentProtectionSettings

When enabled, deployment protection settings require stricter permissions (owner-only).

## Example Usage

```typescript
import { StrictDeploymentProtectionSettings } from "@vercel/sdk/models/team.js";

let value: StrictDeploymentProtectionSettings = {
  enabled: true,
  updatedAt: 6715.64,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `enabled`          | *boolean*          | :heavy_check_mark: | N/A                |
| `updatedAt`        | *number*           | :heavy_check_mark: | N/A                |