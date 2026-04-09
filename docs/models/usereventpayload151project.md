# UserEventPayload151Project

## Example Usage

```typescript
import { UserEventPayload151Project } from "@vercel/sdk/models/payloadresourceconfig.js";

let value: UserEventPayload151Project = {
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