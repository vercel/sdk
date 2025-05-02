# UserEventPayload83Project

## Example Usage

```typescript
import { UserEventPayload83Project } from "@vercel/sdk/models/userevent.js";

let value: UserEventPayload83Project = {
  id: "<id>",
  oldConnectConfigurations: [
    {
      envId: "<id>",
      connectConfigurationId: "<id>",
      passive: false,
      buildsEnabled: false,
      createdAt: 2599.49,
      updatedAt: 9006.68,
    },
  ],
  newConnectConfigurations: [
    {
      envId: "preview",
      connectConfigurationId: "<id>",
      passive: false,
      buildsEnabled: false,
      createdAt: 1806.52,
      updatedAt: 463.67,
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