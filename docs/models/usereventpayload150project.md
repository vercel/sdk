# UserEventPayload150Project

## Example Usage

```typescript
import { UserEventPayload150Project } from "@vercel/sdk/models/payloadviewpreference.js";

let value: UserEventPayload150Project = {
  id: "<id>",
  oldConnectConfigurations: null,
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