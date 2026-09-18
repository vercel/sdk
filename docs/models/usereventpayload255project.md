# UserEventPayload255Project

## Example Usage

```typescript
import { UserEventPayload255Project } from "@vercel/sdk/models/trigger.js";

let value: UserEventPayload255Project = {
  id: "<id>",
  newConnectConfigurations: [],
  oldConnectConfigurations: [
    {
      buildsEnabled: true,
      connectConfigurationId: "<id>",
      createdAt: 7630.36,
      envId: "<id>",
      passive: false,
      updatedAt: 8968.35,
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `id`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `name`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `newConnectConfigurations`                                                 | [models.NewConnectConfigurations](../models/newconnectconfigurations.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |
| `oldConnectConfigurations`                                                 | [models.OldConnectConfigurations](../models/oldconnectconfigurations.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |