# UserEventPayload84Project

## Example Usage

```typescript
import { UserEventPayload84Project } from "@vercel/sdk/models/userevent.js";

let value: UserEventPayload84Project = {
  id: "<id>",
  oldConnectConfigurations: [
    {
      envId: "<id>",
      connectConfigurationId: "<id>",
      passive: false,
      buildsEnabled: false,
      createdAt: 409.31,
      updatedAt: 8134,
    },
  ],
  newConnectConfigurations: [
    {
      envId: "<id>",
      connectConfigurationId: "<id>",
      passive: false,
      buildsEnabled: false,
      createdAt: 5292.1,
      updatedAt: 5572.98,
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `id`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `name`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `oldConnectConfigurations`                                                 | [models.OldConnectConfigurations](../models/oldconnectconfigurations.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |
| `newConnectConfigurations`                                                 | [models.NewConnectConfigurations](../models/newconnectconfigurations.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |