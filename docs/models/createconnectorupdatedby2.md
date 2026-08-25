# CreateConnectorUpdatedBy2

Principal that most recently mutated the connector. Same shape as {@link createdBy} but tracks the most recent updater, not the original creator. At create time the two fields point at the same principal; they diverge on the first subsequent update.

## Example Usage

```typescript
import { CreateConnectorUpdatedBy2 } from "@vercel/sdk/models/createconnectorop.js";

let value: CreateConnectorUpdatedBy2 = {
  type: "project",
  id: "<id>",
  environment: "<value>",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `type`                                       | *"project"*                                  | :heavy_check_mark:                           | Principal kind.                              |
| `id`                                         | *string*                                     | :heavy_check_mark:                           | Vercel project ID.                           |
| `environment`                                | *models.CreateConnectorUpdatedByEnvironment* | :heavy_check_mark:                           | N/A                                          |