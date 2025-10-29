# UserEventPayload89Project

## Example Usage

```typescript
import { UserEventPayload89Project } from "@vercel/sdk/models/userevent.js";

let value: UserEventPayload89Project = {
  id: "<id>",
  oldConnectConfigurations: [],
  newConnectConfigurations: [
    {
      envId: "<id>",
      connectConfigurationId: "<id>",
      passive: true,
      buildsEnabled: false,
      createdAt: 5463.76,
      updatedAt: 2696.76,
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