# NewConnectConfigurations

## Example Usage

```typescript
import { NewConnectConfigurations } from "@vercel/sdk/models/userevent.js";

let value: NewConnectConfigurations = {
  envId: "<id>",
  connectConfigurationId: "<id>",
  passive: false,
  buildsEnabled: false,
  createdAt: 4721.36,
  updatedAt: 9855.12,
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `envId`                  | *models.PayloadEnvId*    | :heavy_check_mark:       | N/A                      |
| `connectConfigurationId` | *string*                 | :heavy_check_mark:       | N/A                      |
| `passive`                | *boolean*                | :heavy_check_mark:       | N/A                      |
| `buildsEnabled`          | *boolean*                | :heavy_check_mark:       | N/A                      |
| `createdAt`              | *number*                 | :heavy_check_mark:       | N/A                      |
| `updatedAt`              | *number*                 | :heavy_check_mark:       | N/A                      |