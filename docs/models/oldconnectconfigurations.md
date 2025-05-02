# OldConnectConfigurations

## Example Usage

```typescript
import { OldConnectConfigurations } from "@vercel/sdk/models/userevent.js";

let value: OldConnectConfigurations = {
  envId: "<id>",
  connectConfigurationId: "<id>",
  passive: false,
  buildsEnabled: false,
  createdAt: 7630.36,
  updatedAt: 1271.11,
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `envId`                  | *models.EnvId*           | :heavy_check_mark:       | N/A                      |
| `connectConfigurationId` | *string*                 | :heavy_check_mark:       | N/A                      |
| `passive`                | *boolean*                | :heavy_check_mark:       | N/A                      |
| `buildsEnabled`          | *boolean*                | :heavy_check_mark:       | N/A                      |
| `createdAt`              | *number*                 | :heavy_check_mark:       | N/A                      |
| `updatedAt`              | *number*                 | :heavy_check_mark:       | N/A                      |