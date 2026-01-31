# UserEventPayload109Project

## Example Usage

```typescript
import { UserEventPayload109Project } from "@vercel/sdk/models/userevent.js";

let value: UserEventPayload109Project = {
  id: "<id>",
  oldConnectConfigurations: [
    {
      envId: "<id>",
      connectConfigurationId: "<id>",
      passive: false,
      buildsEnabled: true,
      createdAt: 9005.75,
      updatedAt: 8968.35,
    },
  ],
  newConnectConfigurations: null,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `id`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `name`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `oldConnectConfigurations`                                                 | [models.OldConnectConfigurations](../models/oldconnectconfigurations.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |
| `newConnectConfigurations`                                                 | [models.NewConnectConfigurations](../models/newconnectconfigurations.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |