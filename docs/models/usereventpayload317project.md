# UserEventPayload317Project

## Example Usage

```typescript
import { UserEventPayload317Project } from "@vercel/sdk/models/usereventpayloaddsyncmode.js";

let value: UserEventPayload317Project = {
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
  oldConnectConfigurations: null,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `id`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `name`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `newConnectConfigurations`                                                 | [models.NewConnectConfigurations](../models/newconnectconfigurations.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |
| `oldConnectConfigurations`                                                 | [models.OldConnectConfigurations](../models/oldconnectconfigurations.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |