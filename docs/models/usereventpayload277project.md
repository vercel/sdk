# UserEventPayload277Project

## Example Usage

```typescript
import { UserEventPayload277Project } from "@vercel/sdk/models/usereventpayloadnext.js";

let value: UserEventPayload277Project = {
  id: "<id>",
  newConnectConfigurations: [
    {
      buildsEnabled: true,
      connectConfigurationId: "<id>",
      createdAt: 4721.36,
      envId: "production",
      passive: true,
      updatedAt: 452.34,
    },
  ],
  oldConnectConfigurations: [],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `id`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `name`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `newConnectConfigurations`                                                 | [models.NewConnectConfigurations](../models/newconnectconfigurations.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |
| `oldConnectConfigurations`                                                 | [models.OldConnectConfigurations](../models/oldconnectconfigurations.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |