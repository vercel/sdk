# UserEventPayload310Project

## Example Usage

```typescript
import { UserEventPayload310Project } from "@vercel/sdk/models/payloaddsyncmode.js";

let value: UserEventPayload310Project = {
  id: "<id>",
  newConnectConfigurations: null,
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