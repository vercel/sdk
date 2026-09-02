# UserEventPayload244Project

## Example Usage

```typescript
import { UserEventPayload244Project } from "@vercel/sdk/models/siftroute.js";

let value: UserEventPayload244Project = {
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
  newConnectConfigurations: [],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `id`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `name`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `oldConnectConfigurations`                                                 | [models.OldConnectConfigurations](../models/oldconnectconfigurations.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |
| `newConnectConfigurations`                                                 | [models.NewConnectConfigurations](../models/newconnectconfigurations.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |