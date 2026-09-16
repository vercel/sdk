# ConnectConnectorCreateResultUpdatedBy2

Principal that most recently mutated the connector. Same shape as {@link createdBy} but tracks the most recent updater, not the original creator. At create time the two fields point at the same principal; they diverge on the first subsequent update.

## Example Usage

```typescript
import { ConnectConnectorCreateResultUpdatedBy2 } from "@vercel/sdk/models/connectconnectorcreateresult.js";

let value: ConnectConnectorCreateResultUpdatedBy2 = {
  environment: "preview",
  id: "<id>",
  type: "project",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `environment`                                    | *models.UpdatedByEnvironmentTarget*              | :heavy_check_mark:                               | Deployment environment of the project principal. |
| `id`                                             | *string*                                         | :heavy_check_mark:                               | Vercel project ID.                               |
| `type`                                           | *"project"*                                      | :heavy_check_mark:                               | Principal kind.                                  |